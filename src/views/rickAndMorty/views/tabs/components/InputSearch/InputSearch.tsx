import { ChangeEvent, FC } from "react";
import { Col } from "react-bootstrap";

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
    <Col xs={12} className="mb-3 pt-3 buscador-views-rickmorty">
      <input
        type="text"
        placeholder={`Buscar ${placeHolder}`}
        onChange={onChange}
        value={searchValue}
      />
    </Col>
  );
};
