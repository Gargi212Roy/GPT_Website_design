import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving and Distrusts instantly",
    text: "Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet amet Lorem ipsum dolor, sit amet",
  },
  {
    title: "Become the Tended Active",
    text: "Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet amet Lorem ipsum dolor",
  },
  {
    title: "Message Or Am Nothing",
    text: "Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet amet Lorem ipsum dolor, sit amet",
  },
  {
    title: "Ready Boy Law County",
    text: "Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet",
  },
];

function Features() {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future Is Now And You Just Need To ReaLise It. Step Into Future
          Today And Make It Happen
        </h1>
        <p>Request Early Access To Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
