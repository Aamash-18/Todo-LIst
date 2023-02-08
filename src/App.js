import React, { useState } from "react";
import ToDoLists  from "./ToDoLists";
import "./App.css";
const App = () => {
  const [inputList,setInputList]=useState("");
  const [items,setItems]=useState([]);

  const myEvent = (event) => {
    setInputList(event.target.value);
  };
  const addFunc=()=>{
    setItems((oldval)=>{
      return [...oldval,inputList];
    })
    setInputList("");
  }
  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !==id;
      })
    })
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" value={inputList} placeholder="Add a item" onChange={myEvent} id="input"/>
        <button onClick={addFunc}>+</button>

        <ol>
         {items.map((itemval,index)=>{
             return <ToDoLists text={itemval} key={index} id={index} onSelect={deleteItems}/>
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
