import { ThemeProvider } from "@emotion/react"
import "./App.css"
import { AppRoutes } from "./app/Routes"
import { theme } from "./components"
import { AppModal } from "./components/Modal/Modal"
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppModal />
        <AppRoutes />
      </div>
    </ThemeProvider>
  )
}

export default App
