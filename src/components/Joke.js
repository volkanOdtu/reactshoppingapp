import React from "react";

function Joke(props) {
  const showPunchLine = true;

  return (
    <div>
      <div style = {{ display : !props.question && "none" }} > question: {props.question} </div>
      <div style = {{color :!props.question && "grey" }} > punchLine: {props.punchLine} </div>
      <p />
    </div>
  );
}

export default Joke;
