import { Link } from "react-router-dom";
import InputFieldPoll from "../../components/inputField";
import PollButton from "../../components/pollButton";
import "./style.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { inputFieldSignupData } from "../../staticData/inputFieldData";
import { getRegisterData } from "../../utils/GetResisterData";
import { selectData } from "../../staticData/selectData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignupSchema } from "../../schema/Schema";
import { useDispatch } from "react-redux";


const Signup = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{ Email: "", Password: "", Role: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          dispatch(getRegisterData(values));
          toast.success("Signup success", {
            position: "top-center",
            theme: "colored",
            autoClose: 1000,
          });
          actions.resetForm();
        }}
      >
        <div className="form-container">
          <h1 className="title">Sign up</h1>
          <ToastContainer />
          <Form className="signup_form">
            <div className="signup-input-group">
              {inputFieldSignupData.map((ele) => {
                return (
                  <div key={ele.id}>
                    <label htmlFor={ele.name}>{ele.name}</label>
                    <InputFieldPoll
                      className={"signup-inputfield"}
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
            <div className="signup__select">
              <label htmlFor="role">Role</label>
              <Field as="select" className="select" name="Role">
                <option>-- Select Role --</option>
                {selectData.map((ele) => {
                  return (
                    <option key={ele.id} value={ele.name}>
                      {ele.name}
                    </option>
                  );
                })}
              </Field>
              <p className="error">
                <ErrorMessage name="Role" />
              </p>
            </div>
            <div className="signup-btn">
              <PollButton
                type={"submit"}
                buttonstyle={"sign"}
                value={"Sign up"}
              />
            </div>
          </Form>
          <div className="signup">
            <p>
              I have an account ? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default Signup;
