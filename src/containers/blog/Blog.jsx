import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./images";

function Blog() {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A Lot is Happening, We are Blogging about It
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Mar 12, 2023"
            title="GPT3 and Open AI is the Future. Let us Explore how it is! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quod est repellat blanditiis culpa eaque?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Mar 12, 2023"
            title="GPT3 and Open AI is the Future. Let us Explore how it is!"
          />
          <Article
            imgUrl={blog03}
            date="Mar 12, 2023"
            title="GPT3 and Open AI is the Future. Let us Explore how it is!"
          />
          <Article
            imgUrl={blog04}
            date="Mar 12, 2023"
            title="GPT3 and Open AI is the Future. Let us Explore how it is!"
          />
          <Article
            imgUrl={blog05}
            date="Mar 12, 2023"
            title="GPT3 and Open AI is the Future. Let us Explore how it is!"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
