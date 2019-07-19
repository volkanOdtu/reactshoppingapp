import React,{Component} from "react";

class HeaderWelcome extends Component  {
  render()
  {
      return (
        <header>
          <p>Welcome, {this.props.username} </p>
        </header>
      );
 }
}
export default HeaderWelcome;
