import { lumis2 } from "../../assets/lumis/lumis"
import shadow from "../../assets/shadows/shadow2.svg"
import {
  selectGenderAge,
  selectLumiParams,
  selectPersonalData,
} from "../slices/authSelectors"
import { useAppSelector } from "../hooks"
import { useLocation } from "react-router"
import { lumiTexts } from "./lumiTexts"
import type { RoutesNames } from "../Routes"
import { LumiBubble } from "../../components/LumiBubble"

export const LumiBox = () => {
  const { color } = useAppSelector(selectLumiParams)
  const { name } = useAppSelector(selectPersonalData)
  const { gender } = useAppSelector(selectGenderAge)
  const lumi = lumis2.find(lumi => lumi.lumiColor === color)
  const pathName = useLocation().pathname.substring(1) as RoutesNames
  const lumiText = lumiTexts(pathName, name, gender)

  return (
    <div>
      <LumiBubble lumiText={lumiText} />
      <div style={{ marginBottom: "-2.5vw", padding: 0, zIndex: 1 }}>
        <img
          src={lumi?.icon}
          alt={`${lumi?.lumiColor}lumi`}
          style={{ width: "30vw" }}
        />
      </div>
      <div style={{ margin: 0, padding: 0, zIndex: 10 }}>
        <img src={shadow} alt={"lumi-shadow"} style={{ width: "22vw" }} />
      </div>
    </div>
  )
}
