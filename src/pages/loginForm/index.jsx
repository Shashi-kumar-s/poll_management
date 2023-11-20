import React from "react";
import "../loginForm/style.css";
import InputFieldPoll from "../../components/inputField";
import PollButton from "../../components/pollButton";
import { Link } from "react-router-dom";
import { ErrorMessage, Form, Formik } from "formik";
import { inputFieldLoginData } from "../../staticData/inputFieldData";
import { getLoginData } from "../../utils/GetLoginData";
import { SignupSchema } from "../../schema/Schema";

const LoginForm = () => {
  return (
    <>
      <Formik
        initialValues={{ Email: "", Password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          getLoginData(values);
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
