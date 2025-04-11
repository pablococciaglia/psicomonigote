import { Button, styled } from "@mui/material"
import type { FC } from "react"
import type { LumiName, Gender } from "../../Common/Types"

interface AppRadioButtonProps {
  internValue: Gender | LumiName
  value: Gender | LumiName | undefined
  show: string
  onChange: (...event: any[]) => void
}

const StyledButton = styled(Button)({
  boxShadow: "none",
  borderRadius: 50,
  padding: "10px 30px",
  border: "1px solid",
  height: 55,
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

export const AppRadioButton: FC<AppRadioButtonProps> = ({
  value,
  show,
  internValue,
  onChange,
}) => {
  return (
    <StyledButton
      onClick={() => onChange(internValue)}
      sx={[
        {
          color: "background.default",
          //backgroundColor: "background.default",
          borderColor: "primary.dark",
        },
        {
          "&:hover": {
            backgroundColor: "action.hover",
            color: "primary.light",
          },
        },
      ]}
      variant={value === internValue ? "contained" : "outlined"}
    >
      {show}
    </StyledButton>
  )
}
