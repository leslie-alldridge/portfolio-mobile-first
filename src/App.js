import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import NavbarTop from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import BlogHeading from "./Components/BlogHeading";
import BlogContent from "./Components/BlogContent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarTop />
        <Header />
        <Portfolio />
        <BlogHeading />
        <BlogContent />
      </div>
    );
  }
}

export default App;
