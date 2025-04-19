import { Navigate } from "react-router"
import { Outlet } from "react-router"
import { useAppSelector } from "../hooks"
import { selectUserId } from "../slices/authSlice"

export const LoggedLayout = () => {
  const userId = useAppSelector(selectUserId)
  if (!userId) {
    return <Navigate to="/login" replace />
  }
  return (
    <>
      <Outlet />
    </>
  )
}
