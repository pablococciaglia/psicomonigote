import { createSelector } from "@reduxjs/toolkit"
import { selectIsLoading } from "./slices/authSlice"
import { Status } from "../Common/Types"

export const selectIsAnyLoading = createSelector(
  selectIsLoading,
  loading => loading === Status.LOADING,
)
