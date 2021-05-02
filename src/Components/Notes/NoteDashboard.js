import React, { useEffect } from "react";
import { Row, Col } from "antd";

function NoteDashboard(props) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Row>
        <Col sm={7}>
          Project List
        </Col>
        <Col sm={16}>
          <br></br>
          <Row justify="center">
            <h2>Project Details</h2>
          </Row>
          Project Details
        </Col>
        <Col>
          <br></br>
          <h2>Please,select a project</h2>
        </Col>
      </Row>
    </div>
  );
}

export default NoteDashboard;
