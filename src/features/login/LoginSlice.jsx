import { createSlice } from "@reduxjs/toolkit";

const initialState = {data:[]};

export const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
      LoginSuccess(state,action){
      console.log(action,"++++++++++");
      state.data=action
      }
  },
});

export const {LoginSuccess} = LoginSlice.actions;
export default LoginSlice.reducer;
