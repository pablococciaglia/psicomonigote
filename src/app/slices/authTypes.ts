import type { Gender, LumiColor, LumiName, Status } from "../../Common/Types"

export type InputsGenderAge = {
  gender: Gender | undefined
  age: string | undefined
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
  status: Status
  correctProcess: boolean
  userId: string
  JWT: string
}
