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

// If you are not using async thunks you can use the standalone `createSlice`.
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
    selectGenderAge: auth => ({
      gender: auth.registerForm.gender,
      age: auth.registerForm.age,
    }),
    selectLumiParams: auth => ({
      lumiName: auth.registerForm.lumiName,
      customName: auth.registerForm.customName,
      color: auth.registerForm.color,
      lumiGender: auth.registerForm.lumiGender,
    }),
    selectPersonalData: auth => ({
      name: auth.registerForm.name,
      lastName: auth.registerForm.lastName,
      email: auth.registerForm.email,
      password: auth.registerForm.password,
      repeatPassword: auth.registerForm.repeatPassword,
      terms: auth.registerForm.terms,
    }),
    selectStatus: auth => auth.status,
    selectIsCorrectProcess: auth => auth.correctProcess,
  },
})

// Action creators are generated for each case reducer function.
export const { updateAuthFormValues, submitAuthForm } = authSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {
  selectGenderAge,
  selectStatus,
  selectLumiParams,
  selectPersonalData,
  selectIsCorrectProcess,
} = authSlice.selectors
