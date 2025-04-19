import { Box, Stack } from "@mui/material"
import { useForm, type SubmitHandler } from "react-hook-form"
import { AppButton } from "../../components/formComponents/AppButton"
import { AppInputText } from "../../components/formComponents/AppInputText"
import { RoutesNames } from "../Routes"
import { GoBack } from "../../components/formComponents/GoBack"
import { AppText } from "../../components/formComponents/AppText"
import { AppSeparator } from "../../components/formComponents/AppSeparator"

type Input = {
  email: string
}
export const ForgetPassword = () => {
  const initialState: Input = {
    email: "",
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    values: initialState,
  })

  const onSubmit: SubmitHandler<Input> = data => console.log(data)
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
        <GoBack route={RoutesNames.login} />
        <AppText text="Recupera tu contraseña" mt />
        <AppSeparator />
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "10px" }}>
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

            <AppButton loading={false} text="Enviar" type="submit" />
          </Stack>
        </form>
      </Box>
    </>
  )
}
