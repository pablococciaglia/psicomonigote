import { Routes, Route } from "react-router"
import { Home } from "../Home/Home"
import { AuthLayout } from "../auth/AuthLayout"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { About } from "../About/About"
import { Videos } from "../videos/Videos"
import { Diario } from "../diario/Diario"
import { GenderAge } from "../auth/GenderAge"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="videos" element={<Videos />} />
      <Route path="diario" element={<Diario />} />
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="register2" element={<GenderAge />} />
      </Route>
    </Routes>
  )
}
