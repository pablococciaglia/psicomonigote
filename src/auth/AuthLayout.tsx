import { Outlet } from "react-router"
import Grid from "@mui/material/Grid2"
import { Box } from "@mui/material"

export const AuthLayout = () => {
  return (
    <Box sx={{ backgroundColor: "primary.light", height: "100vh" }}>
      <Box
        sx={{
          height: "25vh",
          width: "100vw",
          backgroundColor: "primary.dark",
          position: "absolute",
          bottom: 0,
        }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={6}>
            ' por momento es solo un texto, aca iria el monigote'
          </Grid>
          <Grid size={6} style={{ paddingRight: "50px", paddingTop: "100px" }}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
      <Grid></Grid>
    </Box>
  )
}
