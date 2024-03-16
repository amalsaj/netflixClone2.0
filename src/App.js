import React from "react";
import { useState } from "react";
import "./App.css";
const App = () => {
  const Time = new Date().toLocaleString();
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        {toDo !== "" && (
          <i
            onClick={() =>
              setTodos([
                ...toDos,
                { id: Date.now(), text: toDo, time: Time, status: false },
              ])
            }
            className="fas fa-plus"
          ></i>
        )}
      </div>
      <div className="todos">
        {toDos.map((value, index) => {
          return (
            <div className="todo" key={index}>
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.checked);
                    setTodos(
                      toDos.filter((value2) => {
                        if (value2.id === value.id) {
                          value2.status = e.target.checked;
                          console.log(value);
                        }
                        return value2;
                      })
                    );
                  }}
                  value={value.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p
                  style={{
                    textDecoration: value.status ? "line-through" : "none",
                    textDecorationColor: "black",
                    opacity: value.status ? 0.5 : 1,
                  }}
                >
                  {value.text}
                </p>
                <div className="clock">{value.time}</div>
              </div>
              <div className="right">
                <i
                  onClick={() => {
                    // Remove todo when delete icon is clicked
                    setTodos(toDos.filter((value3) => value3.id !== value.id));
                    console.log(toDos);
                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
      <div className="active">
      <i class="fa-solid fa-list-check active-check"  style={{color: "#63E6BE",}}></i>
       <h2  style={{color:'white'}} onClick={()=>{
        setTodos(toDos.filter((value4) => value4.status !== true));
       }}>Active</h2>
      </div>
      <div className="completed">
      <i class="fa-solid fa-check-double active-check" style={{color: '#63E6BE'}}></i>
       <h2 onClick={()=>{
        setTodos(toDos.filter((value4) => value4.status !== false));
       }}>Completed</h2>
      </div>
    </div>
    
  );
};

export default App;
