import React,{useState} from "react";
import "./styles.css";

var headingText="Inside Out";
// var col="red";
// var welcomeUser="Teejay"//prompt("Enter username in the prompt command:Teejay");
// var fC="blue";


export default function App() {
  const [likeCounter,setLikeCounter]=useState(0);
  function likeClickHandler(){
    var newlikeCounter=likeCounter+1;
    setLikeCounter(newlikeCounter);
  }

  return (
    <div className="App">
      <h1 /*style={{ backgroundColor:col }}*/>{headingText}</h1>
      {/* <h2 style={{color:fC}}>{welcomeUser}</h2> */}
      <button onClick={likeClickHandler}>Like this!</button>{likeCounter}
    </div>
  );
}

/*
  Things to notice: class->className;style->takes an object instead
*/ 