import { type FC } from "react"
import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"

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

interface AppButtonProps {
  loading?: boolean
  text: string
  type?: "button" | "submit" | "reset"
  width?: "fit-content"
  onClick?: () => void
}
export const AppButton: FC<AppButtonProps> = ({
  loading,
  text,
  type,
  width,
  onClick,
}) => {
  return (
    <StyledButton
      type={type}
      variant="contained"
      loading={loading}
      disableRipple
      onClick={onClick}
      sx={[
        {
          width,
          color: "primary.contrastText",
          backgroundColor: "background.default",
          borderColor: "primary.dark",
        },
        {
          "&:hover": { backgroundColor: "action.hover" },
        },
      ]}
    >
      {text}
    </StyledButton>
  )
}
