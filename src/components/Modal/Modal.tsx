import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import type { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  closeModal,
  selectModalOpen,
  selectModalText,
  selectModalTitle,
} from "../../app/modalSlice"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh",
  bgcolor: "background.default",
  color: "primary.contrastText",
  border: "2px solid primary.main",
  boxShadow: 24,
  overflow: "scroll",
  p: 4,
}

interface AppModalProps {}

export const AppModal: FC<AppModalProps> = () => {
  const dispatch = useAppDispatch()
  const open = useAppSelector(selectModalOpen)
  const text = useAppSelector(selectModalText)
  const title = useAppSelector(selectModalTitle)
  return (
    <Modal
      open={open}
      onClose={() => {
        dispatch(closeModal())
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {text}
        </Typography>
      </Box>
    </Modal>
  )
}
