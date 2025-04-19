import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Stack,
} from "@mui/material"
import { AppInputText } from "../../components/formComponents/AppInputText"
import { Controller, useForm, type SubmitHandler } from "react-hook-form"
import { AppButton } from "../../components/formComponents/AppButton"
import { useNavigate } from "react-router"
import { useAppDispatch, useAppSelector } from "../hooks"
import { openModal } from "../modalSlice"
import { privacyPolicy } from "../../utils/privacyPolicy"
import type { PersonalDataInputs } from "../slices/authTypes"
import { updateAuthFormValues } from "../slices/authSlice"
import { RoutesNames } from "../Routes"
import { AlreadyHaveAccount } from "./AlreadyHaveAccount"
import { selectPersonalData } from "../slices/authSelectors"

export const Register = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const initialState = useAppSelector(selectPersonalData)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PersonalDataInputs>({
    values: initialState,
  })
  const onSubmit: SubmitHandler<PersonalDataInputs> = data => {
    dispatch(updateAuthFormValues(data))
    navigate(`../${RoutesNames.genderAgeRegister}`)
  }

  return (
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
            <Controller
              rules={{
                required: { value: true, message: "Seleccione un género" },
              }}
              control={control}
              name="terms"
              render={({ field: { onChange, value } }) => (
                <FormControl error={!!errors.terms?.type}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        disableRipple
                        onChange={onChange}
                        checked={value}
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
              )}
            />
          </div>

          <AppButton loading={false} text="siguiente" type="submit" />
        </Stack>
      </form>
      <AlreadyHaveAccount />
    </Box>
  )
}
