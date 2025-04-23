import { AppSvgButton } from "./AppSvgButton"
import arrowBack from "../../assets/arrowback.svg"
import { useNavigate } from "react-router"
import type { RoutesNames } from "../../app/Routes"
import type { CSSProperties, FC } from "react"

interface GoBackProps {
  route: RoutesNames
}

const iconStyle: CSSProperties = {
  height: "20px",
}

export const GoBack: FC<GoBackProps> = ({ route }) => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(`../${route}`)
  }
  return (
    <div style={{ position: "absolute" }}>
      <AppSvgButton onClick={goBack}>
        <img src={arrowBack} style={iconStyle} alt={"arrow back"} color="red" />
      </AppSvgButton>
    </div>
  )
}
