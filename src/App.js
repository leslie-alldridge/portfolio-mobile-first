import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import NavbarTop from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarTop />
        <Header />
        <Portfolio />
      </div>
    );
  }
}

export default App;
