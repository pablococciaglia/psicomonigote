import { Controller, type SubmitHandler, useForm } from "react-hook-form"
import { Box, Stack } from "@mui/material"
import { Gender, LumiColor, LumiName } from "../Common/Types"
import { AppButton } from "../components/formComponents/AppButton"
import { AppRadioButton } from "../components/formComponents/AppRadioButton"
import { AppSeparator } from "../components/formComponents/AppSeparator"
import { AppText } from "../components/formComponents/AppText"
import { useNavigate } from "react-router"
import { AppSvgButton } from "../components/formComponents/AppSvgButton"
import type { CSSProperties } from "react"
import { lumis1 } from "../assets/lumis/lumis"
import { AppInputText } from "../components/formComponents/AppInputText"

type Inputs = {
  gender: Gender | undefined
  lumiName: LumiName
  customName: string | undefined
  color: LumiColor
}

const iconStyle: CSSProperties = {
  height: "43px",
  width: "43px",
}

export const LumiRegister = () => {
  const navigate = useNavigate()
  const initialState: Inputs = {
    gender: undefined,
    lumiName: LumiName.lumi,
    customName: "",
    color: LumiColor.white,
  }

  const {
    watch,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    values: initialState,
  })
  const onSubmit: SubmitHandler<Inputs> = data =>
    console.log({
      lumiColor: data.color,
      lumiName:
        data.lumiName === LumiName.lumi ? LumiName.lumi : data.customName,
      lumiSex: data.gender,
    })
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
            <AppText text="¿Qué género te gustaría que tuviera?" mt />
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
                  {lumis1.map(lumi => (
                    <AppSvgButton
                      key={`lumiRegister${lumi.lumiColor}`}
                      internValue={lumi.lumiColor}
                      onChange={onChange}
                      value={value}
                    >
                      <img
                        src={lumi.icon}
                        style={iconStyle}
                        alt={`${lumi.lumiColor}lumi`}
                      />
                    </AppSvgButton>
                  ))}
                </Stack>
              )}
            />

            {errors.color?.message && errors.color?.message}

            <AppButton loading={false} text="Finalizar" type="submit" />
          </Stack>
        </form>
      </Box>
      <Stack spacing={2} alignItems={"center"}>
        <AppText text="¿Ya tienes cuenta?" />

        <AppButton
          width={"fit-content"}
          text="Ingresa aquí"
          type="button"
          onClick={() => {
            navigate("../login")
          }}
        />
      </Stack>
    </>
  )
}
