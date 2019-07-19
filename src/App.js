import React from "react";
import Footer from "./components/footer";
//import Header from "./components/header";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import MainContent from "./components/maincontent";

import ContactCard from "./components/ContactCard";
import Joke from "./components/Joke";
import jokesData from "./jokesData";
import SchoolProduct from "./components/SchoolProduct";
import productsData from "./vschoolProducts";
import todosData from "./todosData";
import TodoItem from "./components/TodoItem";
import Greeting from "./components/Greeting";
import HeaderWelcome from "./components/HeaderWelcome";
import Conditional from "./Conditional";
import Form from "./FormContainer";

function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
  );
}
export default App;

/*
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isChecked: true,
      gender: "",
      favColor: "blue"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });

    /*
    this.setState({
      //firstName: event.target.value
      [event.target.name]: event.target.value
    });  
  }
  handleSubmit()
  {}
  render() {
    return (
      <form onSubmit = {this.handleSubmit()}>
        <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} /><br />
        <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} /> <br/>
        <textarea value={"Default deger"} />
        <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handleChange}/><br/>
        <label><input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange} /> Male </label>
        <label><input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange} /> Female </label> <br/>
        <label>Favorite Color: </label>
        <select value={this.state.favColor} onChange={this.handleChange} name="favColor" >
          <option value="blue"> Blue </option>
          <option value="green"> Green </option>
          <option value="red"> Red </option>
          <option value="orange"> Orange </option>
          <option value="yellow"> Yellow </option>
        </select>

        <h1> {this.state.firstName} {this.state.lastName} </h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your favorite color is {this.state.favColor} </h2>
        <button  >Submit</button>
      </form>
    );
  }
}

export default App; */

/*
class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      loading:false ,
      character:{}
    };
  }
  componentDidMount()
  {
    this.setState({loading :true});
    fetch("https://swapi.co/api/people/1").then(response =>response.json()).
        then(data=>{
          this.setState({ 
            loading :false ,
            character:data});
        });
  }

  render()
  {
    const text = this.state.loading ? "Loading..." : this.state.character.name;
    return (<div> {text} </div>);
  }
}

export default App; */

/*
class App extends React.Component {
  constructor() {
    super();
    this.state = { loggedIn: false };
    this.LogChange = this.LogChange.bind(this);
  }

  LogChange() {
    this.setState( (prevState) => {
      return { loggedIn: !prevState.loggedIn }
    });
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ? 
          <h2>You are loggedIn </h2>
         : 
          <h2>You are loggedOut </h2>
        }
        <button onClick={this.LogChange}> LogChange </button>
      </div>
    );
  }
}
export default App; 


class App extends React.Component {
  constructor() {
    super();
    //this.state = {count: 0 };
    this.state = {
      todos: todosData
    };
    this.Change = this.Change.bind(this);
  }
  //function Change()  bu hata aliyor
  Change(id) {
    //this.state.count++;
    /*this.setState( (prevState)=>{
      return {
        count: prevState.count + 1 
      }
    });  

    //state de hatirlarsak todos arrayini tutmustuk ,herhangi bi item degisikligi oldugunda
    //prevState.todos tum item larini traverse edip id si gonderileni tespit edip completed ini guncelliyoruz
    this.setState((prevState) =>{
      const updatedTodos = prevState.todos.map( todo =>{
        if( todo.id === id ){
          todo.completed = !todo.completed;
        }
        return todo;
      })
      return { todos :updatedTodos }
    });

    alert("Changed " + id);
  }

  render() {
    const todoItems = todosData.map(i => (
      <TodoItem key={i.id} eleman={i} Change={this.Change} />
    ));

    return <div>{todoItems}</div>;
    /*
    return (
      <div>
        <TodoItem  ></TodoItem>
        <button onClick={this.Change}>Change </button>
      </div>
    ); 
  }
}
}
export default App; */

/*
function print()
{
  alert("You clicked");
  console.log("You clicked");
}
function App() {
  return (
    <div>
      <img onMouseOver ={()=> console.log("Mouse hovered") }  src ="http://www.fillmurray.com/200/100" />
      <br/>
      <br/>
      <button onClick = {print} > print </button>
    </div>
  );
}
export default App;


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Volkan",
      age: 37
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name} </h1>
        <h3>{this.state.age} years old </h3>
        <HeaderWelcome username="volkan" />
        <Greeting />
      </div>
    );
  }
}
export default App; */

//class App extends React.Component {

/*
  const jokesArr = jokesData.map(joke => (
    <Joke key={joke.id} question={joke.question} punchLine={joke.punchline} />
  ));

  const productsArr = productsData.map(item => (
    <SchoolProduct
      name={item.name}
      price={item.price}
      description={item.description}
    />
  ));

  const todoItems = todosData.map(i => <TodoItem eleman ={i} />);
  return <div>{todoItems}</div>;
*/
// }
//export default App;

/*
  const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //her elemani traverse edip function i apply ediyor
  const doubledArr = numsArr.map(function(num) {
    return num * 2; // index deki elemanin degerini 2 ye katliyiruz
  });
  console.log(doubledArr);*/

//return <div>{jokesArr}</div>;
//}
/*
class App extends React.Component
{
  yourMethodHere()
  {}

  render()  
  {
    return (
      <div>
          <h1>Code burda</h1>
      </div>
      ) 
       
  }
}

export default App;

/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
