import { Typography } from "@mui/material"
import type { FC, ReactNode } from "react"

interface AppTextoProps {
  text: ReactNode
  mt?: boolean
}
export const AppText: FC<AppTextoProps> = ({ text, mt }) => (
  <div>
    <Typography
      sx={{
        color: "background.default",
        fontWeight: 500,
        marginTop: mt ? 5 : "none",
      }}
    >
      {text}
    </Typography>
  </div>
)
