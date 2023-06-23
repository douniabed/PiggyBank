import { useState } from "react";
import HomeView from "./HomeView";
import "../../App.css";
import { v4 as uuidv4 } from "uuid";

export interface Entry {
  id: string;
  name: string;
  description: string;
  price: number;
}

const HomeControler = () => {
  const [entries, setEntries] = useState<Entry[]>([
    {
      id: uuidv4(),
      name: "loto",
      description: "Loto Ticket",
      price: 30,
    },
  ]);

  // Delete Function
  const handleDelete = (id: string) => {
    const item = entries.filter((entry) => entry.id !== id);
    setEntries(item);
  };

  // handleSubmit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    // Je recupère les valeurs des input que l'utilisateur rentre
    const name = e.currentTarget.name.value;
    const description = e.currentTarget.description.value;
    const price = e.currentTarget.price.value;
    //console.log(price, name);

    const newEntry: Entry = {
      id: uuidv4(),
      name: name,
      description: description,
      price: Number(price),
    };
    // copy les données de entries et je rajoute le nouveau objet
    if (name != "" && description != "") {
      const copyEntries = [...entries, newEntry];
      setEntries(copyEntries);
    }
    e.currentTarget.reset();
  };

  const getTotalPrice = () => {
    const total = entries.reduce((acc, entry) => acc + entry.price, 0);
    return total;
  };

  return (
    <HomeView
      entries={entries}
      handleDelete={handleDelete}
      handleSubmit={handleSubmit}
      getTotalPrice={getTotalPrice}
    />
  );
};

export default HomeControler;
