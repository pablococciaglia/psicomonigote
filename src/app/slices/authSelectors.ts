import { createSelector } from "@reduxjs/toolkit"
import { selectRegisterForm } from "./authSlice"

export const selectPersonalData = createSelector(
  selectRegisterForm,
  ({ name, lastName, email, password, repeatPassword, terms }) => ({
    name,
    lastName,
    email,
    password,
    repeatPassword,
    terms,
  }),
)
export const selectLumiParams = createSelector(
  selectRegisterForm,
  ({ lumiName, customName, color, lumiGender }) => ({
    lumiName,
    customName,
    color,
    lumiGender,
  }),
)
export const selectGenderAge = createSelector(
  selectRegisterForm,
  ({ gender, age }) => ({
    gender,
    age,
  }),
)
