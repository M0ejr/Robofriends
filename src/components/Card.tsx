import React from "react";

type CardProps = {
  name: string;
  email: string;
  id: number;
};

const Card: React.FC<CardProps> = ({ name, email, id }) => {
  return (
    <div
      className="tc dib br3 pa3 ma2 grow bw2 shadow-5"
      style={{ background: "rgb(28, 28, 28)" }}
    >
      <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
      <div>
        <h2 className="white">{name}</h2>
        <p className="white">{email}</p>
      </div>
    </div>
  );
};

export default Card;
