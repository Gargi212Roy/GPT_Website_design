import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="gpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT3"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis adipisci ipsa quis ipsam commodi libero perspiciatis tempora vel praesentium vero, esse quisquam cum, omnis aperiam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis adipisci ipsa quis ipsam commodi libero perspiciatis tempora vel praesentium vero, esse quisquam cum, omnis aperiam!"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="ChatBots"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis adipisci ipsa "
        />
        <Feature
          title="KnowledgeBase"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis adipisci ipsa quis ipsam commodi libero perspiciatis"
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis adipisci ipsa quis ipsam commodi "
        />
      </div>
    </div>
  );
}

export default WhatGPT3;
