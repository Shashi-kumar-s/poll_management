import { APIEnpoint } from "../config/Config";
import {SignupSuccess } from "../features/signup/SignupSlice";

export const getRegisterData = (values) => {
  return async (dispatch) => {
    try {
      const response = await APIEnpoint.post(
        `add_user?username=${values.Email}&password=${values.Password}&role=${values.Role}`
      );
      dispatch(SignupSuccess(response.data.data));
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
};
