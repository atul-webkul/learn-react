import React, { Component } from 'react'

class controlledcomponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name : "atul sharma"
        };
    }

    changeHandler = (event) => {
        event.preventDefault();
        let name = event.target.value;
        this.setState({name})
    } 
  render() {
    return (
      <form>
        <input type="text" name="user_name" value={this.state.name} onChange= {this.changeHandler} />
      </form>
    )
  }
}

export default controlledcomponent