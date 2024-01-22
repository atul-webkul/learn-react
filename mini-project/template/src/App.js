import './App.css';
import Header from './Components/header'
import Footer from './Components/footer'
import Navbar from './Components/navbar'
import Homepage from './Components/home';
import About from './Components/about';
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
                <Navbar />
                <Header />
                <Routes>
                <Route path='/' element={<Homepage  />}  />
                <Route path='about' element={<About />}  />
                </Routes>
                <Footer />

        </BrowserRouter>
  );
}

export default App;
