import React from "react";
import { Row, Col } from "antd";
import { Form, Field } from "formik";
import { AntInput } from "../../Utils/CreateAntdFields";
import { isRequired } from "../../Utils/ValidateFields";
import ReactQuillFormik from "../../Utils/ReactQuillFormik";

const NoteForm = ({ handleSubmit, values, submitCount, handleReset }) => {
  return (
    <Form
      className="form-container"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <Row>
        <Col span={24}>
          <label>Name</label>
          <Field
            component={AntInput}
            name="name"
            type="text"
            validate={isRequired}
            submitCount={submitCount}
            hasFeedback
          />
        </Col>
      </Row>

      <Row>
        <p>Description</p>
      </Row>
      <Row>
        <Col span={24}>
          <Field
            name="description"
            type="text"
            label="Description"
            submitCount={submitCount}
          >
            {({ field }) => ReactQuillFormik(field)}
          </Field>
        </Col>
      </Row>

      <Row>
        <div className="submit-container">
          <br></br>
          <button className="ant-btn ant-btn-primary" type="submit">
            Submit
          </button>
        </div>
      </Row>
    </Form>
  );
};

export default NoteForm;
