import { Box, Stack, Typography } from "@mui/material"
import { useForm, type SubmitHandler } from "react-hook-form"
import { AppButton } from "../../components/formComponents/AppButton"
import { useNavigate } from "react-router"
import { AppInputText } from "../../components/formComponents/AppInputText"
import { RoutesNames } from "../Routes"
import { submitLogin } from "../slices/authSlice"
import { useAppDispatch } from "../hooks"

type Inputs = {
  email: string
  password: string
}

export const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const initialState: Inputs = {
    email: "",
    password: "",
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    values: initialState,
  })
  const onSubmit: SubmitHandler<Inputs> = data => dispatch(submitLogin(data))
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 6,
          marginBottom: 5,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <AppInputText
              type="email"
              error={!!errors.email?.type}
              label="Correo electrónico"
              helperText={errors.email?.message}
              registerField={register("email", {
                required: "El E-mail es requerido",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                  message: "No es un E-mail válido",
                },
              })}
            />
            <AppInputText
              type="password"
              error={!!errors.password?.type}
              label="Contraseña"
              registerField={register("password", {
                required: "La contraseña es requerida",
                minLength: { value: 8, message: "Mínimo 8 caracteres" },
              })}
              helperText={errors.password?.message}
            />
            <AppButton loading={false} text="Iniciar sesión" type="submit" />
          </Stack>
        </form>
        <Typography
          sx={{
            color: "background.default",
            cursor: "pointer",
            marginTop: "5px",
          }}
          onClick={() => {
            navigate(`../${RoutesNames.forgetPass}`)
          }}
        >
          ¿Has olvidado tu contraseña?
        </Typography>
      </Box>
      <Stack spacing={2} alignItems={"center"}>
        <Typography sx={{ color: "background.default" }}>
          ¿Todavía no tienes cuenta?
        </Typography>
        <AppButton
          width={"fit-content"}
          text="Regístrate aquí"
          type="button"
          onClick={() => {
            navigate(`../${RoutesNames.personalDataRegister}`)
          }}
        />
      </Stack>
    </>
  )
}
