import React from "react";
import { Entry } from "../views/home/HomeControler";

export interface TableProps {
  entries: Entry[];
  handleDelete: (id: string) => void;
}
const Table: React.FC<TableProps> = ({ entries, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr className="table-head">
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      {/* <ListEntryElement entries={entries} /> */}
      <tbody>
        {entries.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td className="Last-Col">
                {item.price}
                <button onClick={() => handleDelete(item.id)}>✖</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
