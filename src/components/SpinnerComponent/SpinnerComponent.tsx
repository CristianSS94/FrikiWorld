import { FC } from "react";
import { Col, Spinner } from "react-bootstrap";

import "./SpinnerComponent.scss";

export const SpinnerComponent: FC = () => {
  return (
    <Col className="col-centrar-spinner">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Col>
  );
};
