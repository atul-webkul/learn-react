import React, { Component } from 'react'

class form extends Component {
constructor(props) {
super(props);
this.state = {
  name:null,
  country:null,
};
}

submitHandler = (event) => {
  event.preventDefault();
console.log(this.state);
const name = event.target.iname.value;
const country = event.target.country.value;
this.setState({name,country},
  ()=> {
    console.log(this.state)
  });
}
  render() {
    return (
     <div>
<form onSubmit={this.submitHandler}>
  <div>
  <label htmlFor="">Name</label>
  <input type="text" name="iname"/>
  </div>
  <div>
  <label htmlFor="">Country</label>
  <select name="country">  
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
  </div>
  <button type="submit">Submit</button> 
</form>
     </div> 
    )
  }
}

export default form