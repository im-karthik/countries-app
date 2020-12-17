import React, { useState } from "react";
import "./Swatch.scss";
const Swatch = (props) => {
  const [isShown, setIsShown] = useState(false);
  let swatchData = (
    <div className="front" onClick={() => setIsShown(true)}>
      <div className="Head">
        <img src={props.data.flag} width="50px" height="50px" />
        <div className="name-capital-container">
          <span className="name">{props.data.name}</span>
          <span className="capital">{props.data.capital}</span>
        </div>
      </div>
      <hr></hr>
      <div className="Info">
        Population
        <div className="Population">{props.data.population}</div>
      </div>
    </div>
  );
  if (isShown) {
    swatchData = (
      <div className="back" onClick={() => setIsShown(false)}>
        <div className="name">{props.data.name}</div>
        <hr />
        <div>Continent : {props.data.region}</div>
        <div>Area : {props.data.area}</div>
        <div>Currency : {props.data.currencies[0].name}</div>
        <div className="Info">
          <div className="Author">{props.author}</div>
        </div>
      </div>
    );
  }

  return <article className="Swatch">{swatchData}</article>;
};

export default Swatch;
