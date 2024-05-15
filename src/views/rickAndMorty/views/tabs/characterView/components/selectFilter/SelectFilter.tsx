import { ChangeEvent, FC } from "react";
import { Col, Form } from "react-bootstrap";

import {
  optionGenderSelector,
  optionStatusSelector,
} from "../../../../../enums";

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
      <Col xs={3} className="mb-3 pt-3 form-floating">
        <Form.Select
          id="floatingGenderSelect"
          className="form-control"
          aria-label="Default select example"
          onChange={onGenderChange}
        >
          <option value="">Todos</option>
          {optionGenderSelector.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
        <label
          className="select-filter-rickMorty"
          htmlFor="floatingGenderSelect"
        >
          Filtrar Género
        </label>
      </Col>
      <Col xs={3} className="mb-3 pt-3 form-floating">
        <Form.Select
          id="floatingStatusSelect"
          aria-label="Default select example"
          onChange={onStatusChange}
        >
          <option value="">Todos</option>
          {optionStatusSelector.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
        <label
          className="select-filter-rickMorty"
          htmlFor="floatingStatusSelect"
        >
          Filtrar Estado
        </label>
      </Col>
    </>
  );
};