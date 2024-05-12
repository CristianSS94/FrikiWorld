import { FC } from "react";
import { Col, Form } from "react-bootstrap";

export const SelectFilter: FC = () => {
  return (
    <Col xs={6} className="mb-3 pt-3">
      <Form.Select aria-label="Default select example">
        <option>Filtro</option>
        <option value="1">Estado: ¿Vivo o muerto?</option>
        <option value="2">Especia: ¿Humano u otro?</option>
        <option value="3">genero: ¿Masculino, Femenino? otro?</option>
      </Form.Select>
    </Col>
  );
};
