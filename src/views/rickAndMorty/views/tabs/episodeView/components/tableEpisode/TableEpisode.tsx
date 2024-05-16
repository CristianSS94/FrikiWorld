import { FC } from "react";
import { Col, Table } from "react-bootstrap";
import { IEpisode } from "../../../../../models/IEpisodeDTO";

interface ITableEpisodeProps {
  dataFiltered: IEpisode[] | undefined;
}

const formatEpisode = (algo: string) => {
  let episodeFormated = algo;

  if (algo[4] === "0") {
    episodeFormated = `Season ${algo.slice(2, 3)}, episode ${algo.slice(5)}`;
  } else {
    episodeFormated = `Season ${algo.slice(2, 3)}, episode ${algo.slice(4)}`;
  }

  return episodeFormated;
};

export const TableEpisode: FC<ITableEpisodeProps> = ({ dataFiltered }) => {
  return (
    <Col className="table-episode-rickMorty">
      <Table striped bordered hover className="tabla-content-rickMorty">
        <thead>
          <tr>
            <th>Episodio</th>
            <th>Título</th>
            <th>Estreno</th>
          </tr>
        </thead>
        <tbody>
          {dataFiltered &&
            dataFiltered.map((elem) => (
              <tr key={elem.id}>
                <td>{formatEpisode(elem.episode)}</td>
                <td>{elem.name}</td>
                <td>{elem.air_date}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Col>
  );
};
