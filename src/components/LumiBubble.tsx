import { Box, Typography } from "@mui/material"
import type { FC } from "react"
interface LumiBubbleProps {
  lumiText: string
}
export const LumiBubble: FC<LumiBubbleProps> = ({ lumiText }) => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          borderRadius: 30,
          padding: "20px",
        }}
      >
        <Typography color="primary.contrastText" fontSize={30}>
          {lumiText}
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "red",
          "&::after": {
            transform: "translateX(4vw)",
            content: '""',
            position: "absolute",
            borderLeft: "10px solid transparent",
            borderRight: "20px solid transparent",
            borderTop: "30px solid white",
            borderTopColor: "primary.dark",
          },
        }}
      />
    </div>
  )
}
