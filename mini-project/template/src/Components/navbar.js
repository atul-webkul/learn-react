import React from 'react';
import { Link } from "react-router-dom";

function navbar(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        <Link to="about" name="about"><div className="nav-link px-lg-3 py-3 text-white" >About</div></Link>
                        <Link to="/" name="home" ><div className="nav-link px-lg-3 py-3 text-white">Home</div></Link>
                        <Link to="/samplepage" name="Sample post" ><div className="nav-link px-lg-3 py-3 text-white">Sample Post</div></Link>
                        <Link to="/contact" name="Contact" ><div className="nav-link px-lg-3 py-3 text-white">Contact</div></Link>
                        <Link name="Login" onClick={props.login}><div className="nav-link px-lg-3 py-3 text-white">{props.status ? "Logout" : "LogIn"}</div></Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default navbar;
