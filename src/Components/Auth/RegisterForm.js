import React from "react";
import { Form, Field } from "formik";
import { AntInput, AntPassword } from "../../Utils/CreateAntdFields";
import { isRequired, validateEmail } from "../../Utils/ValidateFields";
import { Row, Col ,Button} from "antd";

const RegisterForm = ({ handleSubmit, reset,values, submitCount }) => (
  <Form
    className="form-container"
    style={{ alignContent: "center" }}
    onSubmit={handleSubmit}
  >
    <label>First name: </label>
    <Field
      component={AntInput}
      name="firstname"
      type="text"
      placeholder="Firstname..."
      validate={isRequired}
      submitCount={submitCount}
      hasFeedback
    />
    <label>Last name: </label>
    <Field
      component={AntInput}
      name="lastname"
      type="text"
      placeholder="Lastname..."
      validate={isRequired}
      submitCount={submitCount}
      hasFeedback
    />
    <label>User name: </label>
    <Field
      component={AntInput}
      name="username"
      type="text"
      placeholder="Username..."
      validate={isRequired}
      submitCount={submitCount}
      hasFeedback
    />
    <label>E-mail: </label>
    <Field
      component={AntInput}
      name="email"
      type="email"
      placeholder="E-mail..."
      validate={validateEmail}
      submitCount={submitCount}
      hasFeedback
    />
    <label>Password: </label>
    <Field
      component={AntPassword}
      name="password"
      type="password"
      placeholder="Password..."
      validate={isRequired}
      submitCount={submitCount}
      hasFeedback
    />
    <div className="submit-container">
      <Row>
        <Col>
          <Button style={{backgroundColor: "green", color: "white", borderColor: "green"}} onClick={handleSubmit} >Register</Button>
        </Col>
        <Col>
          <button className="ant-btn ant-btn-danger" type="reset">
            Reset
          </button>
        </Col>
      </Row>
    </div>
  </Form>
);

export default RegisterForm;
