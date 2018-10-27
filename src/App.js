import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import NavbarTop from "./Components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarTop />
        <Header />
      </div>
    );
  }
}

export default App;
