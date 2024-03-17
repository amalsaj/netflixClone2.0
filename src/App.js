import React from "react";
import { useState } from "react";
import "./App.css";
const App = () => {
  const Time = new Date().toLocaleString();
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");
  const [active, setActive] = useState([]);
  const [complete, setComplete] = useState([]);
  const [flag, setFlag] = useState(false);
  const [flag1, setFlag1] = useState(false);

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
        <button
          className="button"
          onClick={() => {
            const filteredTodos = toDos.filter((value4) => !value4.status);
            setActive(filteredTodos);
            setFlag1(!flag1);
          }}
        >
          <i
            className="fa-solid fa-bars-staggered active-check"
            style={{ color: "#15b283" }}
          ></i>
          Active
        </button>
        {flag1 && (
          <ul>
            {active.map((todo, index) => (
              <li className="h" key={index}>
                {todo.text}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="active">
        <button
          className="button"
          onClick={() => {
            const completedTodos = toDos.filter((value4) => value4.status);
            setComplete(completedTodos);
            setFlag(!flag);
            console.log(flag);
          }}
        >
          <i
            class="fa-solid fa-check-double active-check"
            style={{ color: "#15b283" }}
          ></i>
          Completed
        </button>
        {flag && (
          <ul>
            {complete.map((todo, index) => (
              <li className="h" key={index}>
                {todo.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
