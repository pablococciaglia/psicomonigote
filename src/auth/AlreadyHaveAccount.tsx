import { Stack, Typography } from "@mui/material"
import { AppButton } from "../components/formComponents/AppButton"
import { RoutesNames } from "../app/Routes"
import { useNavigate } from "react-router"

export const AlreadyHaveAccount = () => {
  const navigate = useNavigate()

  return (
    <Stack spacing={2} alignItems={"center"} sx={{ mt: "20px" }}>
      <Typography sx={{ color: "background.default", fontWeight: 500 }}>
        ¿Ya tienes cuenta?
      </Typography>
      <AppButton
        width={"fit-content"}
        text="Ingresa aquí"
        type="button"
        onClick={() => {
          navigate(`../${RoutesNames.login}`)
        }}
      />
    </Stack>
  )
}
