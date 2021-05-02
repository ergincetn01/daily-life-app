import React, { useState } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { register } from "../../Store/Actions/SecurityActions";
import RegisterForm from "./RegisterForm";

const initialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
};

function Register(props) {
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (formProps) => {
    const { firstname, lastname, username, email, password } = formProps;
    props.register(formProps, () => {
      props.history.push("/");
    });
    setRedirect(true);
  };

  return (
    <div className="site-layout-content">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {RegisterForm}
      </Formik>
    </div>
  );
}

const mapStateToProps = (state) => ({
  security: state.security,
  errorMessage: state.errors,
});

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(Register);
