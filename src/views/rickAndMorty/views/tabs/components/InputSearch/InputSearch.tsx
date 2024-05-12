import { ChangeEvent, FC } from "react";
import { Col, Form } from "react-bootstrap";

interface IInputSearchProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  placeHolder: string;
}

export const InputSearch: FC<IInputSearchProps> = ({
  onChange,
  searchValue,
  placeHolder,
}) => {
  return (
    <Col xs={6} className="mb-3 pt-3">
      {/* <input
        type="text"
        placeholder={`Buscar ${placeHolder}`}
        onChange={onChange}
        value={searchValue}
      /> */}
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        onChange={onChange}
        value={searchValue}
        placeholder={`Buscar ${placeHolder}`}
      />
    </Col>
  );
};
