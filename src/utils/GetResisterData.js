import { APIEnpoint } from "../config/config"
export const getRegisterData = (values) => {
  APIEnpoint.post(
    `add_user?username=${values.Name}&password=${values.Password}&role=${values.role}`
  ).then((res) => {
    console.log(res, "______")
  })
}
