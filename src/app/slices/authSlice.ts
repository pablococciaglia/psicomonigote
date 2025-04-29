import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import { LumiColor, LumiName, Status } from "../../Common/Types"
import type { AuthSliceState, RegisterForm } from "./authTypes"
import { authLoginApi } from "../../service/authApi"

const initialState: AuthSliceState = {
  registerForm: {
    gender: undefined,
    age: undefined,
    lumiGender: undefined,
    lumiName: LumiName.lumi,
    customName: "",
    color: LumiColor.white,
    name: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    terms: false,
  },
  correctProcess: false,
  userId: "",
  JWT: "",
  status: Status.IDLE,
}

export const authSlice = createAppSlice({
  name: "auth",
  initialState,
  reducers: create => ({
    updateAuthFormValues: create.reducer(
      (state, action: PayloadAction<Partial<RegisterForm>>) => {
        state.registerForm = {
          ...state.registerForm,
          ...action.payload,
        }
        state.correctProcess = true
      },
    ),
    changeLumiColor: create.reducer(
      (state, action: PayloadAction<LumiColor>) => {
        state.registerForm.color = action.payload
      },
    ),

    submitAuthForm: create.reducer(state => {
      const { repeatPassword, lumiName, customName, ...rest } =
        state.registerForm
      console.log({
        ...rest,
        lumiName: lumiName === LumiName.lumi ? lumiName : customName,
      })
    }),
    submitLogin: create.asyncThunk(
      async (data: { email: string; password: string }) => {
        const response = await authLoginApi(data)
        console.log(response)
        return response
      },
      {
        pending: state => {
          state.status = Status.LOADING
        },
        fulfilled: (state, action) => {
          state.status = Status.IDLE
          state.JWT = action.payload?.JWT!
          state.userId = action.payload?.userId!
          localStorage.setItem(
            "user",
            JSON.stringify({
              JWT: action.payload?.JWT,
              userId: action.payload?.userId,
            }),
          )
        },
        rejected: state => {
          state.status = Status.FAILED
        },
      },
    ),
  }),
  selectors: {
    selectRegisterForm: auth => auth.registerForm,
    selectStatus: auth => auth.status,
    selectIsCorrectProcess: auth => auth.correctProcess,
    selectUserId: auth => auth.userId,
    selectJWT: auth => auth.JWT,
    selectIsLoading: auth => auth.status,
  },
})

export const {
  updateAuthFormValues,
  submitAuthForm,
  changeLumiColor,
  submitLogin,
} = authSlice.actions

export const {
  selectRegisterForm,
  selectStatus,
  selectIsCorrectProcess,
  selectUserId,
  selectIsLoading,
} = authSlice.selectors
