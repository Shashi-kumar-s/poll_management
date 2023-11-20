import { APIEnpoint } from "../config/Config"
import {LoginSuccess} from "../features/login/LoginSlice"

export const getLoginData =(values) => {
  return async (dispatch) => {
    try {
      const response = await APIEnpoint.post(
        `login?username=${values.Email}&password=${values.Password}`
      );
      dispatch(LoginSuccess(response.data.token));
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
}

