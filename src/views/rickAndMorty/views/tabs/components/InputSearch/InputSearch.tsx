import { ChangeEvent, FC } from "react";
import { Form } from "react-bootstrap";

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
    <Form.Control
      type="text"
      aria-describedby="passwordHelpBlock"
      onChange={onChange}
      value={searchValue}
      placeholder={`Buscar ${placeHolder}`}
    />
  );
};
