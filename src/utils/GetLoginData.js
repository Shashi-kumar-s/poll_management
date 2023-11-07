import { APIEnpoint } from "../config/config"
export const getLoginData = (values) => {
  APIEnpoint.post(
    `login?username=${values.Name}&password=${values.Password}`
  ).then((res) => {
    console.log(res, "______")
  })
}
