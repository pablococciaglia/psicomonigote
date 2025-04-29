import { type FC } from "react"
import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import { useAppSelector } from "../../app/hooks"
import { selectIsAnyLoading } from "../../app/commonSelectors"

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
  text: string
  type?: "button" | "submit" | "reset"
  width?: "fit-content"
  onClick?: () => void
}
export const AppButton: FC<AppButtonProps> = ({
  text,
  type,
  width,
  onClick,
}) => {
  const loading = useAppSelector(selectIsAnyLoading)
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
