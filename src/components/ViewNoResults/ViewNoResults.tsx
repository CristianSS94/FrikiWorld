import { FC } from "react";
import { Col } from "react-bootstrap";

export interface IViewNoResultsProps {
  colClassName: string;
}

export const ViewNoResults: FC<IViewNoResultsProps> = ({ colClassName }) => {
  return (
    <Col className={colClassName}>
      <h6>No hay resultados</h6>
    </Col>
  );
};
