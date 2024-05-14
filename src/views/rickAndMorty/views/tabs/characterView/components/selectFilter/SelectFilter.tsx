import { ChangeEvent, FC } from "react";
import { Col, Form } from "react-bootstrap";
import {
  getOptionGenderSelector,
  getOptionStatusSelector,
} from "../../../../../enums/Selectors-Value";

interface ISelectFilterProps {
  onGenderChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onStatusChange: (e: ChangeEvent<HTMLSelectElement>) => void;
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
          onChange={onGenderChange}
        >
          <option value="">Géneros</option>
          {getOptionGenderSelector.map((option, index) => (
            <option
              key={index}
              value={option.value}
              className="tocameloshuevos"
            >
              {option.label}
            </option>
          ))}
        </Form.Select>
      </Col>
      <Col xs={3} className="mb-3 pt-3">
        <Form.Select
          aria-label="Default select example"
          onChange={onStatusChange}
        >
          <option value="">Estados</option>
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
