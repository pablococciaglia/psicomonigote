import dayjs from "dayjs"
import { Controller, type SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { Box, Stack } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Gender } from "../Common/Types"
import { AppButton } from "../components/formComponents/AppButton"
import { AppDatePicker } from "../components/formComponents/AppDatePicker"
import { AppRadioButton } from "../components/formComponents/AppRadioButton"
import { AppSeparator } from "../components/formComponents/AppSeparator"
import { AppText } from "../components/formComponents/AppText"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  selectIsCorrectProcess,
  updateAuthFormValues,
} from "../app/slices/authSlice"
import type { InputsGenderAge } from "../app/slices/authTypes"
import { RoutesNames } from "../app/Routes"
import { AlreadyHaveAccount } from "./AlreadyHaveAccount"
import { useEffect } from "react"
import { selectGenderAge } from "../app/slices/authSelectors"

export const GenderAge = () => {
  const initialState = useAppSelector(selectGenderAge)
  const isCorrectProcess = useAppSelector(selectIsCorrectProcess)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isCorrectProcess) {
      navigate(`../${RoutesNames.personalDataRegister}`)
    }
  }, [isCorrectProcess, navigate])

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsGenderAge>({
    values: initialState,
  })
  const onSubmit: SubmitHandler<InputsGenderAge> = data => {
    navigate(`../${RoutesNames.lumiRegister}`)
    dispatch(
      updateAuthFormValues({
        ...data,
        age: dayjs(data.age).format("DD-MM-YYYY"),
      }),
    )
  }
  const goBack = () => {
    navigate(`../${RoutesNames.personalDataRegister}`)
  }
  return (
    <>
      <button onClick={goBack}>va hacia atras</button>
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
            <AppText text="Género" mt />
            <AppSeparator />
            <Controller
              rules={{
                required: { value: true, message: "Seleccione un género" },
              }}
              control={control}
              name="gender"
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
            {errors.gender?.message && errors.gender?.message}
            <AppText text="Fecha de nacimiento" mt />
            <AppSeparator />
            <Controller
              rules={{
                validate: val => {
                  if (dayjs().diff(val, "years") < 18) {
                    return "Para participar debes ser mayor de 18 años"
                  }
                },
                required: {
                  value: true,
                  message: "Seleccione su fecha de nacimiento",
                },
              }}
              control={control}
              name="age"
              render={({ field: { onChange, value } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <AppDatePicker value={value} onChange={onChange} />
                </LocalizationProvider>
              )}
            />
            {errors.age?.message && errors.age?.message}

            <AppButton loading={false} text="Siguiente" type="submit" />
          </Stack>
        </form>
      </Box>
      <AlreadyHaveAccount />
    </>
  )
}
