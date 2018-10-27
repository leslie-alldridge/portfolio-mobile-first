import React from "react";
import { Jumbotron } from "react-bootstrap";

const divStyle = {
  color: "blue",
  width: "100vw",
  height: "10vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative"
};

const heroText = {
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  background: "none"
};

export default function PortfolioHeader(props) {
  return (
    <div id="portImg" style={divStyle}>
      <Jumbotron style={heroText}>
        <h3>Portfolio</h3>
      </Jumbotron>
    </div>
  );
}
