import { useState } from "react"
import { useNavigate } from "react-router"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

export const Navbar = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        borderColor: "primary.main",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          color={"red"}
        >
          <Tab
            label="Inicio"
            {...a11yProps(0)}
            onClick={() => {
              navigate("./")
            }}
            color="red"
          />
          <Tab
            label="Videos"
            {...a11yProps(1)}
            onClick={() => {
              navigate("./videos")
            }}
          />
          <Tab
            label="Diario"
            {...a11yProps(2)}
            onClick={() => {
              navigate("./diario")
            }}
          />
          <Tab
            label="Sobre Nosotros"
            {...a11yProps(3)}
            onClick={() => {
              navigate("./about")
            }}
          />
        </Tabs>
      </Box>
    </Box>
  )
}
