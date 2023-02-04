import React, { useState } from "react";
import './App.css';



function TodoListApp() {
  const [inbox, setInbox] = useState([]);
  const [today, setToday] = useState([]);
  const [next7Days, setNext7Days] = useState([]);
  const [input, setInput] = useState("");

  const addToInbox = (event) => {
    event.preventDefault();
    setInbox([...inbox, input]);
    setInput("");
  };

  const addToToday = (index) => {
    const newInbox = [...inbox];
    setToday([...today, newInbox[index]]);
    newInbox.splice(index, 1);
    setInbox(newInbox);
  };

  const addToNext7Days = (index) => {
    const newInbox = [...inbox];
    setNext7Days([...next7Days, newInbox[index]]);
    newInbox.splice(index, 1);
    setInbox(newInbox);
  };

  const removeFromInbox = (index) => {
    const newInbox = [...inbox];
    newInbox.splice(index, 1);
    setInbox(newInbox);
  };
  const removeFromToday = (index) => {
    const newToday = [...today];
    newToday.splice(index, 1);
    setToday(newToday);
  };
  const removeFromNext7Days = (index) => {
    const newNext7Days = [...next7Days];
    newNext7Days.splice(index, 1);
    setNext7Days(newNext7Days);
  };

  return (
    <div className="container">
      <h1>Todo List 2.0</h1>
      <form onSubmit={addToInbox}>
        <input
          type="text"
          placeholder="Add to Inbox"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <h2>Inbox</h2>
      <ul>
        {inbox.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => addToToday(index)}>Today</button>
            <button onClick={() => addToNext7Days(index)}>
              Next7Days
            </button>
            <button onClick={() => removeFromInbox(index)}>Remove</button>
            </li>
        ))}
      </ul>
      <h2>Today</h2>
      <ul>
        {today.map((item, index) => (
          <li key={index}>{item}
          <button onClick={() => removeFromToday(index)}>Remove</button>
          
          </li>
        ))}
      </ul>
      <h2>Next7Days</h2>
      <ul>
        {next7Days.map((item, index) => (
          <li key={index}>{item}
           <button onClick={() => removeFromNext7Days(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListApp;