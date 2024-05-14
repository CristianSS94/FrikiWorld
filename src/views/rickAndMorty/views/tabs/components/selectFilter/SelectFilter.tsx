import { ChangeEvent, FC } from "react";
import { Col, Form } from "react-bootstrap";
import {
  getOptionGenderSelector,
  getOptionStatusSelector,
} from "../../../../enums/Selectors-Value";

interface ISelectFilterProps {
  onGenderChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onStatusChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SelectFilter: FC<ISelectFilterProps> = ({
  onGenderChange,
  onStatusChange,
}) => {
  return (
    <>
      <Col xs={3} className="mb-3 pt-3">
        <Form.Select
          aria-label="Default select example"
          onChange={() => onGenderChange}
        >
          <option value="todos">Géneros</option>
          {getOptionGenderSelector.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </Col>
      <Col xs={3} className="mb-3 pt-3">
        <Form.Select
          aria-label="Default select example"
          onChange={() => onStatusChange}
        >
          <option value="todos">Estados</option>
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
