import React from "react";
import Jeopardy from "../jeopardy/Jeopardy";

function Display(props) {
  return (
    <div className="Display">
      <strong>Question: </strong>
      {props.question}
      <br />
      <strong>Points: </strong>
      {props.value}
      <br />
      <strong>Category: </strong>
      {props.category}
      <br />
      <form onSubmit={props.handleSubmit}>
        <label>Answer: </label>
        <input
          onChange={props.handleChange}
          type="text"
          name="answer"
          value={props.answer}
        />
        <br />
        <button>Submit</button>
        <br />
      </form>
      <h3>Score: {props.score}</h3>
    </div>
  );
}

export default Display;
