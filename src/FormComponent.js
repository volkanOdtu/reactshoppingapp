import React from "react";

function FormComponent(props) {
  return (
    <main>
      <form>
        <input name="firstName" value={props.data.firstName} onChange={props.handleChange} placeholder="First Name" />
        <br />
        <input name="lastName" value={props.data.lastName} onChange={props.handleChange} placeholder="Last Name"
        />
        <br />
        <input
          name="age"
          value={props.data.age}
          onChange={props.handleChange}
          placeholder="Age"
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>
        <br />
        <select
          value={props.data.destination}
          name="destination"
          onChange={props.handleChange}
        >
          <option value="">--Please Choose a destination</option>
          <option value="germany">Germany </option>
          <option value="norway"> Norway</option>
          <option value="istanbul"> Istanbul </option>
          <option value="sydney"> Sydney</option>
        </select>
        <br />

        <button>Submit</button>
      </form>

      <hr />
      <h2> Entered Information: </h2>
      <p>
        Your name: {props.data.firstName} {props.data.lastName}
      </p>
      <p>Your age: {props.data.age} </p>
      <p>Your gender:{props.data.gender} </p>
      <p>Your destination: {props.data.destination} </p>
      <p>Your dietary restrictions:</p>
    </main>
  );
}

export default FormComponent;
