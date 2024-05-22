import { ChangeEvent, FC } from "react";
import { Col, ColProps, Form } from "react-bootstrap";

export interface IInputSearchProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  placeHolder: string;
  colClassName: ColProps;
}

export const InputSearch: FC<IInputSearchProps> = ({
  onChange,
  searchValue,
  placeHolder,
  colClassName,
}) => {
  return (
    <Col {...colClassName}>
      <Form.Control
        type="text"
        aria-describedby="passwordHelpBlock"
        onChange={onChange}
        value={searchValue}
        placeholder={placeHolder}
      />
    </Col>
  );
};
