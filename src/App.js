import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      persons:[
        {
          id:1,
          name:"atul",
          age:25
        },
        {
          id:2,
          name:"xyz",
          age:24
        }
      ],
      isshow:true,
    };
   
  }

  togglehandler = () => {
    this.setState( {isshow: !this.state.isshow })
  };

  render() {
    let persons;
    persons = this.state.persons.map((p,index) => {
      return <Person key={index} name={p.name} age={p.age} />
    });
    return <div className='App'>
      <button onClick={this.togglehandler.bind(this)}>Click me</button>
      {this.state.isshow === true ? persons : "" }
    </div>
   
  }
}  

export default App;
