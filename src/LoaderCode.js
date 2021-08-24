import React from "react";
import Spinner from "./spinner.gif";
import logo from './logolgm.jpeg';
import './App.css';

const Loader = () => {
    return (
        <div className="container">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Lets Grow More</h1>
            </header>
            <img src={Spinner} className="loader" alt="loading"/>
        </div>
    );
};
export default Loader;
