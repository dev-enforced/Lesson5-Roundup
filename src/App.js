import React from "react";
import "./styles.css";

var headingText="Inside Out";
var col="red"
export default function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor:col }}>{headingText}</h1>
    </div>
  );
}

/*
  Things to notice: class->className;style->takes an object instead
*/ 