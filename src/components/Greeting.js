import React, { Component } from "react";

class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 6) timeOfDay = "Good morning";
    else if (hours < 9) timeOfDay = "Good afternoon";
    else timeOfDay = "Good night";

    return <div>{timeOfDay}</div>;
  }
}

export default Greeting;
