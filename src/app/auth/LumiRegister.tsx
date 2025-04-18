import { Controller, type SubmitHandler, useForm } from "react-hook-form"
import { Box, Stack } from "@mui/material"
import { Gender, LumiName } from "../../Common/Types"
import { AppButton } from "../../components/formComponents/AppButton"
import { AppRadioButton } from "../../components/formComponents/AppRadioButton"
import { AppSeparator } from "../../components/formComponents/AppSeparator"
import { AppText } from "../../components/formComponents/AppText"
import { useNavigate } from "react-router"
import { AppSvgButton } from "../../components/formComponents/AppSvgButton"
import { useEffect, type CSSProperties } from "react"
import { lumis1 } from "../../assets/lumis/lumis"
import { AppInputText } from "../../components/formComponents/AppInputText"
import type { LumiInputs } from "../slices/authTypes"
import { useAppDispatch, useAppSelector } from "../hooks"
import {
  changeLumiColor,
  selectIsCorrectProcess,
  submitAuthForm,
  updateAuthFormValues,
} from "../slices/authSlice"
import { AlreadyHaveAccount } from "./AlreadyHaveAccount"
import { RoutesNames } from "../Routes"
import { selectLumiParams } from "../slices/authSelectors"
import { GoBack } from "../../components/formComponents/GoBack"

const iconStyle: CSSProperties = {
  height: "43px",
  width: "43px",
}

export const LumiRegister = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const initialState = useAppSelector(selectLumiParams)
  const isCorrectProcess = useAppSelector(selectIsCorrectProcess)

  useEffect(() => {
    if (!isCorrectProcess) {
      navigate(`../${RoutesNames.personalDataRegister}`)
    }
  }, [isCorrectProcess, navigate])
  const {
    watch,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LumiInputs>({
    values: initialState,
  })
  const onSubmit: SubmitHandler<LumiInputs> = data => {
    dispatch(updateAuthFormValues(data))
    dispatch(submitAuthForm())
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
      <GoBack route={RoutesNames.genderAgeRegister} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <AppText text="¿Qué género te gustaría que tuviera?" mt />
          <AppSeparator />
          <Controller
            rules={{
              required: { value: true, message: "Seleccione un género" },
            }}
            control={control}
            name="lumiGender"
            render={({ field: { onChange, value } }) => (
              <Stack
                spacing={2}
                direction={"row"}
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <AppRadioButton
                  internValue={Gender.FEMALE}
                  onChange={onChange}
                  value={value}
                  show="Femenino"
                />
                <AppRadioButton
                  internValue={Gender.MALE}
                  onChange={onChange}
                  value={value}
                  show="Masculino"
                />
                <AppRadioButton
                  internValue={Gender.NO_BINARY}
                  onChange={onChange}
                  value={value}
                  show="No binario"
                />
              </Stack>
            )}
          />
          {errors.lumiGender?.message && errors.lumiGender?.message}
          <AppText text="¿Quieres personalizar mi nombre?" mt />
          <AppSeparator />
          <Controller
            rules={{
              required: { value: true, message: "Seleccione un género" },
            }}
            control={control}
            name="lumiName"
            render={({ field: { onChange, value } }) => (
              <Stack
                spacing={2}
                direction={"row"}
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <AppRadioButton
                  internValue={LumiName.lumi}
                  onChange={onChange}
                  value={value}
                  show="Me gusta Lumi"
                />
                <AppRadioButton
                  internValue={LumiName.change}
                  onChange={onChange}
                  value={value}
                  show="Cambiar"
                />
              </Stack>
            )}
          />
          {watch("lumiName") === LumiName.change && (
            <AppInputText
              type="text"
              error={!!errors.customName?.type}
              label="Elige un nuevo nombre"
              helperText={errors.customName?.message}
              registerField={register("customName", {
                required: "El nombre es requerido",
                maxLength: {
                  value: 15,
                  message: "Debe tener un máximo de 15 caracteres",
                },
                validate: val => {
                  if (!val?.trim()) {
                    return "El nombre no puede estar vacío"
                  }
                },
              })}
            />
          )}
          {errors.lumiName?.message && errors.lumiName?.message}

          <AppText text="¿Qué color te gustaría que tuviera?" mt />
          <AppSeparator />
          <Controller
            rules={{
              required: { value: true, message: "Seleccione un color" },
            }}
            control={control}
            name="color"
            render={({ field: { onChange, value } }) => (
              <Stack
                spacing={1}
                direction={"row"}
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                {lumis1.map(lumi => {
                  const onClick = () => {
                    onChange(lumi.lumiColor)
                    dispatch(changeLumiColor(lumi.lumiColor))
                  }
                  return (
                    <AppSvgButton
                      key={`lumiRegister${lumi.lumiColor}`}
                      selected={lumi.lumiColor === value}
                      onClick={onClick}
                    >
                      <img
                        src={lumi.icon}
                        style={iconStyle}
                        alt={`${lumi.lumiColor}lumi`}
                      />
                    </AppSvgButton>
                  )
                })}
              </Stack>
            )}
          />

          {errors.color?.message && errors.color?.message}

          <AppButton loading={false} text="Finalizar" type="submit" />
        </Stack>
      </form>{" "}
      <AlreadyHaveAccount />
    </Box>
  )
}
