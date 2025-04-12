import IconButton from "@mui/material/IconButton"
import type { FC, ReactNode } from "react"
import type { LumiColor } from "../../Common/Types"
import { useAppDispatch } from "../../app/hooks"
import { changeLumiColor } from "../../app/slices/authSlice"

interface AppSvgButtonProps {
  children: ReactNode
  internValue: LumiColor
  value: LumiColor
  onChange: (...event: any[]) => void
}

export const AppSvgButton: FC<AppSvgButtonProps> = ({
  children,
  internValue,
  value,
  onChange,
}) => {
  const dispatch = useAppDispatch()
  return (
    <IconButton
      aria-label="LumiColor"
      size="small"
      onClick={() => {
        onChange(internValue)
        dispatch(changeLumiColor(internValue))
      }}
      sx={{ bgcolor: value === internValue ? "primary.dark" : "#f2f4f1" }}
    >
      {children}
    </IconButton>
  )
}
