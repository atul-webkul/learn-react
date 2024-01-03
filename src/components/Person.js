import React,{Component} from "react";
// import Demo from "./demo";
import './component.css';

class Person extends Component{

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            name :"atwul",
            age:235
        };  
    }

        nameChangeHandler() {
            console.log(this.state)
       this.setState({
        name:"atul",
        age:25
       }, () => console.warn(this.state));
    }

    render() {
        return (
        <div className="personBox">
            <h3>Name:{this.props.name}</h3>
            <h3>Age:{this.props.age}</h3>

            <h1>{this.state.name}{this.state.age}</h1>
            <button onClick={this.nameChangeHandler.bind(this)}>Click me</button>
        </div>
        );
    }

}

export default Person;