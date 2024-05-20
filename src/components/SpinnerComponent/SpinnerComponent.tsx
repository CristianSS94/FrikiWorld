import { FC } from "react";
import { Col, Row, Spinner } from "react-bootstrap";

import "./SpinnerComponent.scss";

export interface SpinnerComponentProps {
  rowClassNameSpinner?: string;
}

export const SpinnerComponent: FC<SpinnerComponentProps> = ({
  rowClassNameSpinner,
}) => {
  return (
    <Row className={rowClassNameSpinner}>
      <Col className="col-centrar-spinner">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Col>
    </Row>
  );
};
