import { FC } from "react";
import { Col, Form } from "react-bootstrap";
import {
  getOptionGenderSelector,
  getOptionStatusSelector,
} from "../../../../enums/SelectorsValue";

export const SelectFilter: FC = () => {
  return (
    <>
      <Col xs={3} className="mb-3 pt-3">
        <Form.Select aria-label="Default select example">
          <option value="">Géneros</option>
          {getOptionGenderSelector.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </Col>
      <Col xs={3} className="mb-3 pt-3">
        <Form.Select aria-label="Default select example">
          <option>Estados</option>
          {getOptionStatusSelector.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </Col>
    </>
  );
};
