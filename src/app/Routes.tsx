import { Routes, Route } from "react-router"
import { Home } from "./pages/Home/Home"
import { AuthLayout } from "./auth/AuthLayout"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { About } from "./pages/About/About"
import { Videos } from "./pages/videos/Videos"
import { Diario } from "./pages/diario/Diario"
import { GenderAge } from "./auth/GenderAge"
import { LumiRegister } from "./auth/LumiRegister"
import { LoggedLayout } from "./pages/LoggedLayout"
import { ForgetPassword } from "./auth/ForgetPassword"

export enum RoutesNames {
  login = "login",
  personalDataRegister = "personal-data-register",
  genderAgeRegister = "gender-age-register",
  lumiRegister = "lumi-register",
  forgetPass = "forget-pass",
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<LoggedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="videos" element={<Videos />} />
        <Route path="diario" element={<Diario />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path={RoutesNames.login} element={<Login />} />
        <Route path={RoutesNames.personalDataRegister} element={<Register />} />
        <Route path={RoutesNames.genderAgeRegister} element={<GenderAge />} />
        <Route path={RoutesNames.lumiRegister} element={<LumiRegister />} />
        <Route path={RoutesNames.forgetPass} element={<ForgetPassword />} />
      </Route>
    </Routes>
  )
}
