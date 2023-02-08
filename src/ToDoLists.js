import React from "react";
import "./App.css"
const ToDoLists = (props) => {

    

  return (
    <div className="todo_style">
      <i className="fa-regular fa-circle-xmark" aria-hidden="true" onClick={()=>{
        props.onSelect(props.id);
      }}></i>
      <li>{props.text}</li>
    </div>
  );
};

export default ToDoLists;
