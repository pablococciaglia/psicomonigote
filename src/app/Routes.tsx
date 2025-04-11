import { Routes, Route } from "react-router"
import { Home } from "../Home/Home"
import { AuthLayout } from "../auth/AuthLayout"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { About } from "../About/About"
import { Videos } from "../videos/Videos"
import { Diario } from "../diario/Diario"
import { GenderAge } from "../auth/GenderAge"
import { LumiRegister } from "../auth/LumiRegister"

export enum RoutesNames {
  login = "login",
  personalDataRegister = "personal-data-register",
  genderAgeRegister = "gender-age-register",
  lumiRegister = "lumi-register",
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="videos" element={<Videos />} />
      <Route path="diario" element={<Diario />} />
      <Route element={<AuthLayout />}>
        <Route path={RoutesNames.login} element={<Login />} />
        <Route path={RoutesNames.personalDataRegister} element={<Register />} />
        <Route path={RoutesNames.genderAgeRegister} element={<GenderAge />} />
        <Route path={RoutesNames.lumiRegister} element={<LumiRegister />} />
      </Route>
    </Routes>
  )
}
