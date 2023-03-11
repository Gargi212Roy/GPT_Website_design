import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibilityImage" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access To Get Started</h4>
        <h1 className="gradient__text">
          The Possibilities Are Beyond Our Imagination
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, iste
          obcaecati! Modi temporibus deserunt facilis veniam quam aliquid, quas
          esse sapiente repellat dolorem libero nobis.
        </p>
        <h4>Request For Early Access</h4>
      </div>
    </div>
  );
}

export default Possibility;
