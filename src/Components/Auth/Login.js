import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Formik } from "formik";
import LoginForm from "./LoginForm";
import { login } from "../../Store/Actions/SecurityActions";
import { closeModal} from "../../Store/Actions/ModalActions";

const initialValues = {
  username: "",
  password: "",
};

function Login(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    function pushToProjects() {
      props.history.push("/projects");
    }
    if (props.security.validToken) {
      pushToProjects();
    } else return;
  });

  const handleSubmit = (formProps) => {
    const { username, password } = formProps;

    props.login(formProps, () => {
      props.history.push("/projects")
      dispatch(closeModal())
    });
  };

  return (
    <div className="site-layout-content">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {LoginForm}
      </Formik>
      <br></br>
    </div>
  );
}

const mapStateToProps = (state) => ({
  security: state.security,
  errorMessage: state.errors,
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
