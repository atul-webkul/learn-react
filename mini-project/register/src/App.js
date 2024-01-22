import React, { Component } from 'react';
import "./App.css";
import Register from "./components/Register"
import Greet from "./components/Greet"


class App extends Component{
constructor(props) {
  super(props)

  this.state = {
     isRegister: false,
     name:null,
     email:null,
     password:null,
     showPass:false

  };
}

registrationHandler = (event) => {

  event.preventDefault();
  let name = event.target.name.value;
  let email = event.target.email.value;
  let password = event.target.password.value;
  this.setState({name,email,password,isRegister:true},
    () => {
       console.log(this.state)
    }
    );
}

showPasswordHandler = () => {
  this.setState({showPass: !this.state.showPass})

}

  render() {
    return (
      <div className="App">
        {this.state.isRegister ? <Greet name={this.state.name} email={this.state.email}> </Greet>:<Register submit={this.registrationHandler} showPass={this.state.showPass} click={this.showPasswordHandler}></Register>}
      </div>
    );
  }
}

export default App;
