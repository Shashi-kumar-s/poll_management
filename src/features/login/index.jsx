import React, { useEffect, useState } from "react";
import "./style.css";
import InputFieldPoll from "../../components/inputField";
import PollButton from "../../components/pollButton";
import { Link} from "react-router-dom";
import { ErrorMessage, Form, Formik } from "formik";
import { inputFieldLoginData } from "../../staticData/inputFieldData";
import { getLoginData } from "../../utils/GetLoginData";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const LoginForm = () => {
  const [roleType, setRoleType] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.LoginSlice.data.payload);

  useEffect(() => {
    if (token) {
      const decode = jwtDecode(token);
      setRoleType(decode.role);
      sessionStorage.setItem("token", token);
      console.log(decode, "########");
    }
  }, [token]);


  return (
    <>
      <Formik
        initialValues={{ Email: "", Password: "" }}
        onSubmit={(values, actions) => {
          dispatch(getLoginData(values));
          actions.resetForm();
        }}
      >
        <div className="form-container">
          <h1 className="title">Login</h1>
          <Form className="login_form">
            <div className="login-input-group">
              {inputFieldLoginData.map((ele) => {
                return (
                  <div key={ele.id}>
                    <label htmlFor={ele.name}>{ele.name}</label>
                    <InputFieldPoll
                      type={ele.type}
                      placeholder={ele.placeholder}
                      name={ele.name}
                    />
                    <p className="error">
                      <ErrorMessage name={ele.name} />
                    </p>
                  </div>
                );
              })}
            </div>
            <PollButton
              buttonstyle={"login-btn"}
              type={"submit"}
              value={"Login"}
            />
          </Form>
          <div className="login">
            <p>
              No account ? <Link to="/">Signup</Link>
            </p>
          </div>
        </div>
      </Formik>
    </>
  );
};
export default LoginForm;
