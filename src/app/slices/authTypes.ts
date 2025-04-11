import type { Dayjs } from "dayjs"
import type { Gender, LumiColor, LumiName } from "../../Common/Types"

export type InputsGenderAge = {
  gender: Gender | undefined
  age: Dayjs | undefined //dayjs(data.age).format("DD-MM-YYYY")
}

export type LumiInputs = {
  lumiGender: Gender | undefined
  lumiName: LumiName
  customName: string | undefined
  color: LumiColor
}

export type PersonalDataInputs = {
  name: string
  lastName: string
  email: string
  password: string
  repeatPassword: string
  terms: boolean
}

export type RegisterForm = LumiInputs & PersonalDataInputs & InputsGenderAge

export interface AuthSliceState {
  registerForm: RegisterForm
  status: "idle" | "loading" | "failed"
  correctProcess: boolean
}
