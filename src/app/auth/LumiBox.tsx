import { lumis2 } from "../../assets/lumis/lumis"
import { selectLumiParams, selectPersonalData } from "../slices/authSelectors"
import { useAppSelector } from "../hooks"
import { useLocation } from "react-router"
import { lumiTexts } from "./lumiTexts"
import type { RoutesNames } from "../Routes"
import { LumiBubble } from "../../components/LumiBubble"

export const LumiBox = () => {
  const { color } = useAppSelector(selectLumiParams)
  const { name } = useAppSelector(selectPersonalData)
  const lumi = lumis2.find(lumi => lumi.lumiColor === color)
  const pathName = useLocation().pathname.substring(1) as RoutesNames
  const lumiText = lumiTexts(pathName, name)

  return (
    <div>
      <LumiBubble lumiText={lumiText} />
      <img
        src={lumi?.icon}
        alt={`${lumi?.lumiColor}lumi`}
        style={{ width: "30vw" }}
      />
    </div>
  )
}
