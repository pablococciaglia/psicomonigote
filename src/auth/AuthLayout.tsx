import { Outlet } from "react-router"
import Grid from "@mui/material/Grid2"
import { Box } from "@mui/material"
import { lumis1 } from "../assets/lumis/lumis"
import { selectLumiParams } from "../app/slices/authSelectors"
import { useAppSelector } from "../app/hooks"
import shadow from "../assets/shadows/shadow1.svg"
export const AuthLayout = () => {
  const { color } = useAppSelector(selectLumiParams)
  const lumi = lumis1.find(lumi => lumi.lumiColor === color)
  return (
    <>
      <Grid
        container
        rowSpacing={1}
        sx={{ position: "absolute", width: "100vw" }}
      >
        <Grid size={6} justifyContent={"center"} alignItems={"center"} sx={{}}>
          <img src={lumi?.icon} alt={`${lumi?.lumiColor}lumi`} />
          <img src={shadow} alt={"lumi-shadow"} />
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
