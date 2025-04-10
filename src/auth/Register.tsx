import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Stack,
  Typography,
} from "@mui/material"
import { AppInputText } from "../components/formComponents/AppInputText"
import { useForm, type SubmitHandler } from "react-hook-form"
import { AppButton } from "../components/formComponents/AppButton"
import { useNavigate } from "react-router"
import { useAppDispatch } from "../app/hooks"
import { openModal } from "../app/modalSlice"
import { privacyPolicy } from "../utils/privacyPolicy"

type Inputs = {
  name: string
  lastName: string
  email: string
  password: string
  repeatPassword: string
  terms: boolean
}
export const Register = () => {
  const navigate = useNavigate()
  const initialState: Inputs = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    terms: false,
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    values: initialState,
  })
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)

    navigate("../register2")
  }
  const dispatch = useAppDispatch()

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
              type="text"
              error={!!errors.name?.type}
              label="Nombre"
              helperText={errors.name?.message}
              registerField={register("name", {
                required: "El nombre es requerido",
                minLength: {
                  value: 2,
                  message: "Debe tener al menos dos caracteres",
                },
              })}
            />
            <AppInputText
              type="text"
              error={!!errors.lastName?.type}
              label="Apellidos"
              helperText={errors.lastName?.message}
              registerField={register("lastName", {
                required: "El apellido es requerido",
                minLength: {
                  value: 2,
                  message: "Debe tener al menos dos caracteres",
                },
              })}
            />
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
            <AppInputText
              type="password"
              error={!!errors.repeatPassword?.type}
              label="Repita la contraseña"
              registerField={register("repeatPassword", {
                required: "Debe repetir la contraseña",
                validate: (val: string) => {
                  if (watch("password") !== val) {
                    return "Las contraseñas no coinciden"
                  }
                },
              })}
              helperText={errors.repeatPassword?.message}
            />
            <div style={{ padding: "20px 0px 25px 0px" }}>
              <FormControl error={!!errors.terms?.type}>
                <FormControlLabel
                  control={
                    <Checkbox
                      disableRipple
                      {...register("terms", {
                        validate: val => val,
                      })}
                      sx={{
                        color: "background.default",
                        "&.Mui-checked": {
                          color: "background.default",
                        },
                      }}
                    />
                  }
                  label=<FormLabel
                    sx={{
                      color: "background.default",
                      fontSize: 13,
                    }}
                  >
                    Acepto los{" "}
                    <b
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch(
                          openModal({
                            title: "Términos y condiciones",
                            text: "terminos y condiciones texto largo",
                          }),
                        )
                      }
                    >
                      Términos y condiciones
                    </b>{" "}
                    y estoy deacuerdo con las{" "}
                    <b
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch(
                          openModal({
                            title: "Políticas de privacidad",
                            text: privacyPolicy,
                          }),
                        )
                      }
                    >
                      Políticas de privacidad
                    </b>
                  </FormLabel>
                />
              </FormControl>
            </div>

            <AppButton loading={false} text="siguiente" type="submit" />
          </Stack>
        </form>
        <Stack spacing={2} alignItems={"center"}>
          <Typography
            sx={{ color: "background.default", zIndex: 3, fontWeight: 500 }}
          >
            ¿Ya tienes cuenta?
          </Typography>
          <AppButton
            width={"fit-content"}
            text="Ingresa aquí"
            type="button"
            onClick={() => {
              navigate("../login")
            }}
          />
        </Stack>{" "}
      </Box>
    </>
  )
}
