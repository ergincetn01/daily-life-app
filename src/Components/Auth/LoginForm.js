import React from "react";
import { Form, Field } from "formik";
import { AntInput, AntPassword } from "../../Utils/CreateAntdFields";
import { isRequired } from "../../Utils/ValidateFields";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { useDispatch } from "react-redux";

const LoginForm = ({ handleSubmit, reset, values, submitCount }) => (
    <Form className="form-container" onSubmit={handleSubmit}>
      <label>User name: </label>
      <Field
        component={AntInput}
        name="username"
        type="text"
        validate={isRequired}
        submitCount={submitCount}
        hasFeedback
      />
      <label>Password: </label>
      <Field
        component={AntPassword}
        name="password"
        type="password"
        validate={isRequired}
        submitCount={submitCount}
        hasFeedback
      />
      <div className="submit-container">
        <Row>
          <Col>
            {/* <button className="ant-btn ant-btn-primary" type="submit">
              Login
            </button> */}
            <Button style={{backgroundColor: "green", color: "white", borderColor :"green"}} onClick={handleSubmit}> Log in</Button>
          </Col>
        </Row>
      </div>
    </Form>
  );


export default LoginForm;
