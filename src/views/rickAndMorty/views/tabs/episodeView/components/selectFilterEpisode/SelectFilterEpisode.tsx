import { ChangeEvent, FC } from "react";
import { Col, Form } from "react-bootstrap";
import { optionEpisodeSelector } from "../../../../../enums/Selector-Value-Episode";

interface SelectFilterEpisodeProps {
  onSeasonChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectFilterEpisode: FC<SelectFilterEpisodeProps> = ({
  onSeasonChange,
}) => {
  return (
    <Col xs={6} className="mb-3 pt-3 form-floating">
      <Form.Select
        aria-label="Default select example"
        id="floatingEpisodeSelect"
        onChange={onSeasonChange}
      >
        <option value="">Todas</option>
        {optionEpisodeSelector.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
      <label
        className="select-filter-rickMorty"
        htmlFor="floatingEpisodeSelect"
      >
        Temporada
      </label>
    </Col>
  );
};
