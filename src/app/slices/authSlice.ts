import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import { LumiColor, LumiName } from "../../Common/Types"
import type { AuthSliceState, RegisterForm } from "./authTypes"

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
  status: "idle",
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
  }),
  selectors: {
    selectRegisterForm: auth => auth.registerForm,
    selectStatus: auth => auth.status,
    selectIsCorrectProcess: auth => auth.correctProcess,
  },
})

export const { updateAuthFormValues, submitAuthForm, changeLumiColor } =
  authSlice.actions

export const { selectRegisterForm, selectStatus, selectIsCorrectProcess } =
  authSlice.selectors
