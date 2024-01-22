import React, { Component } from 'react';
import Details from "./Details";
import Question from './Question';
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCh2-6RQzHs13zSeu0OXSi4dckysthV4SE",
  authDomain: "survey-4a386.firebaseapp.com",
  projectId: "survey-4a386",
  storageBucket: "survey-4a386.appspot.com",
  messagingSenderId: "104075153321",
  appId: "1:104075153321:web:c439a06ff0e868cea07eb8",
  measurementId: "G-4RLPP551CX"
};
// if (initializeApp.apps.length < 0) {
    const app = initializeApp(firebaseConfig);
// }
class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id:uuidv4(),
      name:null,
      email:null,
      isSubmitted:null
    }
  }


detailSubmitHandler = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
console.log(this.state)
    this.setState({name,email,isSubmitted:true})
}
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="container card mt-2">
            <h1 className='text-center text-primary'>Survey Form</h1>
          </div>
        </div>

        {
          this.state.name === null && this.state.email === null ? ( <Details submit={this.detailSubmitHandler}/>) : ( <Question />)
        }

      </div>
    )
  }
}

export default Container
