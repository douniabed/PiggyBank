import React from "react";
//import { Entry } from "./HomeControler";
import Table from "../../components/Table";
import Form from "../../components/Form";
import { Entry } from "./HomeControler";
interface HomeViewProps {
  entries: Entry[];
  handleDelete: (id: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  getTotalPrice: () => number;
}

const HomeView: React.FC<HomeViewProps> = ({
  entries,
  handleDelete,
  handleSubmit,
  getTotalPrice,
}) => {
  return (
    <>
      <div className="container">
        <h1>My Piggy Bank</h1>
        <Table entries={entries} handleDelete={handleDelete} />
        <div className="total">Total Price : {getTotalPrice()}</div>
        <div className="form-container">
          <h2>Add new expense</h2>
          <Form handleSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
};

export default HomeView;
