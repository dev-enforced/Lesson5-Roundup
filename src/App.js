import React,{useState} from "react";
import "./styles.css";

var headingText="Inside Out";
// var col="red";
// var welcomeUser="Teejay"//prompt("Enter username in the prompt command:Teejay");
// var fC="blue";
 const emojiDictionary={
"😊":"smiling",
"🤨":"disbelief",
"😞":"sad",
"🥡":"takeout box",
"😩":"annoyance",
"💗":"love"
 }

export default function App() {
  const [likeCounter,setLikeCounter]=useState(0);
  const [data,setData]=useState("");
  const [meaning,setMeaning]=useState("");
  var shoppingList=["coriander","turmeric","cardamom","safron"];

  function meanHandler(event){
var userInp=event.target.value;
var newMeaning=emojiDictionary[userInp];

if(newMeaning===undefined){
  newMeaning="We don't have in our database"
  }
setMeaning(newMeaning);
  }

  function likeClickHandler(){
    var newlikeCounter=likeCounter+1;
    setLikeCounter(newlikeCounter);
  }
function inputHandler(event){
var newData=event.target.value;
setData(newData);
  }
function getCol(index){
if(index%2===0){
  return "red";
}
return "blue"
}
function getSize(index){
  if(index%2===0){
    return "large";
  }
  return "small" 
}
function liClick(item){
  console.log("clicked : "+item);
}
  return (
    <div className="App">
      <h1 /*style={{ backgroundColor:col }}*/>{headingText}</h1>
      {/* <h2 style={{color:fC}}>{welcomeUser}</h2> */}
      <button onClick={likeClickHandler}>Like this!</button>{likeCounter}

      <input onChange={inputHandler}></input>

      <div>Welcome {data}</div>

      <input onChange={meanHandler}></input>
      <div>{meaning}</div>

      <h2>Display shopping list</h2>
      <ul>
        {
          shoppingList.map((item,index)=>{
            
              return <li key={item} onClick={()=>liClick(item)} style={{backgroundColor:"black",color:getCol(index),fontSize:getSize(index),padding:"1rem"}}>{item}</li>
            
          })
        }
      </ul>
    </div>
  );
}

/*
  Things to notice: class->className;style->takes an object instead
*/ 