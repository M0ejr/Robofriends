import React from "react";
import Card from "./Card";

type CardListProps = {
  robots: {
    id: number;
    name: string;
    email: string;
  }[];
}

const CardList: React.FC<CardListProps> = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => (
        <Card
          key={i}
          id={robots[i].id}
          name={robots[i].name}
          email={robots[i].email}
        />
      ))}
    </div>
  );
}

export default CardList;
