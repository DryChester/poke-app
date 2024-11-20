import React from "react";

const Card = ({ id, name, type }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="pokemons" src={"/sprites/pokemon/other/official-artwork/" + id + ".png"} width={200} />
      <div>
        <h2>{name}</h2>
        <p>{type}</p>
      </div>
    </div>
  );
}

export default Card;