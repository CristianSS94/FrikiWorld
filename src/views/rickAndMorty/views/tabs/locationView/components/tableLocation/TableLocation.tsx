import { FC } from "react";
import { Col, Table } from "react-bootstrap";
import { ILocation } from "../../../../../models/ILocationDTO";

interface TableLocationProps {
  dataFiltered?: ILocation[];
}

export const TableLocation: FC<TableLocationProps> = ({ dataFiltered }) => {
  return (
    <Col className="table-episode-rickMorty">
      <Table striped bordered hover className="tabla-content-rickMorty">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Dimensión</th>
          </tr>
        </thead>
        <tbody>
          {dataFiltered?.map((elem) => (
            <tr key={elem.id}>
              <td>{elem.name}</td>
              <td>{elem.type}</td>
              <td>{elem.dimension}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
};
