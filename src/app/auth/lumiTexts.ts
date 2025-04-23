import { Gender } from "../../Common/Types"
import { RoutesNames } from "../Routes"

export const lumiTexts = (
  route: RoutesNames,
  name: string,
  gender: Gender | undefined,
) => {
  let comfortable: string

  switch (gender) {
    case Gender.FEMALE:
      comfortable = "comoda"
      break
    case Gender.MALE:
      comfortable = "comodo"

      break
    case Gender.NO_BINARY:
      comfortable = "comod@"

      break

    default:
      comfortable = "comodo/a"
      break
  }

  switch (route) {
    case RoutesNames.login:
      return "¡Qué bien verte por aquí!"
    case RoutesNames.personalDataRegister:
      return "¡Vamos a comenzar!"
    case RoutesNames.genderAgeRegister:
      return "Necesito que me indiques los siguientes datos para crear tu cuenta y conocerte un poco"
    case RoutesNames.lumiRegister:
      return `¡Genial ${name}! Ya está casi listo. Quiero que sepas que voy a acompañarte durante este camino, por lo que me gustaría que me ayudaras a personalizarme para que te sientas más ${comfortable}.`
    case RoutesNames.forgetPass:
      return "Escribe tu correo electrónico y nosotros te enviaremos a un mensaje para que puedas crear una nueva contraseña"

    default:
      return ""
  }
}
