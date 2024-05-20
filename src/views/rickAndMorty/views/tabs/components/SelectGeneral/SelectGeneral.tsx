import { ChangeEvent, FC } from "react";
import { Col, ColProps, Form } from "react-bootstrap";

export interface ISelectProps {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  optionSelector: { value: string; label?: string }[];
  colProps?: ColProps;
  idSelector: string;
  labelClassname: string;
  labelOption: string;
}

export const SelectGeneral: FC<ISelectProps> = ({
  onChange,
  optionSelector,
  colProps,
  idSelector,
  labelClassname,
  labelOption,
}) => {
  return (
    <>
      <Col {...colProps}>
        <Form.Select
          aria-label="Default select example"
          id={`floating${idSelector}Select`}
          onChange={onChange}
        >
          <option value="">Todas</option>
          {optionSelector.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
        <label
          className={labelClassname}
          htmlFor={`floating${idSelector}Select`}
        >
          {labelOption}
        </label>
      </Col>
    </>
  );
};
