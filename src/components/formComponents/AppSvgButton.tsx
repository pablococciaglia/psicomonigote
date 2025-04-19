import IconButton from "@mui/material/IconButton"
import type { FC, ReactNode } from "react"

interface AppSvgButtonProps {
  children: ReactNode
  selected?: boolean
  onClick: () => void
}

export const AppSvgButton: FC<AppSvgButtonProps> = ({
  children,
  onClick,
  selected,
}) => {
  return (
    <IconButton
      aria-label="LumiColor"
      size="small"
      onClick={onClick}
      sx={{ bgcolor: selected ? "primary.dark" : "#f2f4f1" }}
    >
      {children}
    </IconButton>
  )
}
