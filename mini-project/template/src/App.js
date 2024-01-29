import './App.css';
import Header from './Components/header'
import Footer from './Components/footer'
import Navbar from './Components/navbar'
import Homepage from './Components/home';
import About from './Components/about';
import Contact from './Components/contact';
import Samplepage from './Components/samplepage';
import Error from './Components/error';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       auth:0
    }
  }
  loginHandler = () => {
    // alert("ok")
    this.setState({auth:!this.state.auth})
  }
  render(){
  return(
        <BrowserRouter>
                <Navbar login={this.loginHandler} status={this.state.auth}/>
                <Routes>
                <Route path='/' element={<><Header name={"Homepage"}/><Homepage /> </>}  />
                <Route path='about' element={<><Header name={"About"}/> <About /></>}  />
              <Route path='samplepage' element={
                  
                  <><Header name={"Sample page"} /> <Samplepage /></>}
              />
                <Route path='contact' element={<><Header name={"Contact"}/> <Contact /></>}  />
                <Route path='*' element={<Error />}  />
                </Routes>
                <Footer />

        </BrowserRouter >
  );
}
}
export default App;
