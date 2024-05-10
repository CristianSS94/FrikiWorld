import { FC } from "react";
import { Col, Spinner } from "react-bootstrap";

import "./SpinnerCharacter.scss";

export const SpinnerCharacter: FC = () => {
  return (
    <Col className="col-centrar-spinner">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Col>
  );
};
