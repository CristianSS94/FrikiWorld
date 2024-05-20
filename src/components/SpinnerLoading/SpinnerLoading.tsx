import { FC } from "react";
import { Col, Row, Spinner } from "react-bootstrap";

import "./SpinnerLoading.scss";

export interface spinnerLoadingProps {
  rowClassNameSpinner?: string;
}

export const SpinnerLoading: FC<spinnerLoadingProps> = ({
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
