import { Outlet } from "react-router"
import Grid from "@mui/material/Grid2"
import { Box } from "@mui/material"
import { LumiBox } from "./LumiBox"

export const AuthLayout = () => {
  return (
    <>
      <Grid
        container
        rowSpacing={1}
        sx={{ position: "absolute", width: "100vw" }}
      >
        <Grid
          size={6}
          display="flex"
          justifyContent="center"
          alignItems="end"
          sx={{
            height: "75vh",
            transform: "translateY(4vw)",
            padding: "0 20px",
          }}
        >
          <LumiBox />
        </Grid>
        <Grid
          size={6}
          style={{
            paddingRight: "5vw",
            paddingTop: "5vh",
          }}
        >
          <Outlet />
        </Grid>
      </Grid>
      <Box sx={{ backgroundColor: "primary.light" }}>
        <Box
          sx={{
            height: "75vh",
          }}
        />
        <Box
          sx={{
            height: "25vh",
            width: "100vw",
            backgroundColor: "primary.dark",
          }}
        />
      </Box>
    </>
  )
}
