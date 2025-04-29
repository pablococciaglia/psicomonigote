import { Endpoint, fetchApi, Method } from "./api"

export const authLoginApi = async (data: {
  email: string
  password: string
}) => {
  const url = `${import.meta.env.VITE_BASE_URL}${Endpoint.AUTH}`
  const dataResponse = await fetchApi<{ userId: string; JWT: string }>(
    url,
    Method.POST,
    data,
  )
  return dataResponse
}
