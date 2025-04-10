import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "./createAppSlice"
import type { ReactNode } from "react"

export interface ModalSliceState {
  title: string
  text: ReactNode
  open: boolean
}

const initialState: ModalSliceState = {
  title: "",
  text: undefined,
  open: false,
}

export const modalSlice = createAppSlice({
  name: "modal",
  initialState,
  reducers: create => ({
    openModal: create.reducer(
      (state, action: PayloadAction<{ title: string; text: ReactNode }>) => {
        state.text = action.payload.text
        state.title = action.payload.title
        state.open = true
      },
    ),
    closeModal: create.reducer(state => {
      state.open = false
    }),
  }),
  selectors: {
    selectModalOpen: modal => modal.open,
    selectModalText: modal => modal.text,
    selectModalTitle: modal => modal.title,
  },
})

export const { openModal, closeModal } = modalSlice.actions

export const { selectModalOpen, selectModalText, selectModalTitle } =
  modalSlice.selectors
