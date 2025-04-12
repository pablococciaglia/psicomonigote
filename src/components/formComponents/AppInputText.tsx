import { type FC } from "react"
import { styled } from "@mui/material/styles"
import { TextField } from "@mui/material"
import { type UseFormRegisterReturn } from "react-hook-form"

const StyledInput = styled(TextField)({
  fontFamily: [
    "Roboto",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
})

interface AppInputTextProps {
  type?: React.HTMLInputTypeAttribute | undefined
  label: string
  error: boolean
  helperText?: string
  registerField: UseFormRegisterReturn
}
export const AppInputText: FC<AppInputTextProps> = ({
  type,
  label,
  error,
  helperText,
  registerField,
}) => {
  return (
    <StyledInput
      key={`app-input-text${label}`}
      type={type}
      error={error}
      label={label}
      helperText={helperText}
      {...registerField}
      sx={[
        {
          "& label": {
            color: "background.default",
          },
          "& label-focused": {
            color: "background.default",
          },
          "& label.Mui-focused": {
            color: "background.default",
          },
          "& label.Mui-error": {
            color: "warning.main",
          },
          "& .MuiOutlinedInput-root, .MuiOutlinedInput-root:hover": {
            color: "background.default",
            borderRadius: 50,
            borderColor: "background.default",
            "& fieldset": {
              borderColor: "background.default",
            },
            "&.Mui-focused fieldset": {
              borderColor: "background.default",
            },
          },
          "& .Mui-error, .Mui-error:hover": {
            borderColor: "warning.main",
            "& fieldset": {
              borderColor: "warning.main",
            },
            "&.Mui-focused fieldset": {
              borderColor: "warning.main",
            },
          },
        },
        {
          "&.MuiInputBase-input": {
            bordercolor: "red",
            "&:hover, &.Mui-focusVisible": {},
            "&.Mui-active": {},
          },
        },
      ]}
    />
  )
}
