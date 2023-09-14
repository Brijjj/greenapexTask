import React, { useState } from "react";

const Todotask = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState([]);
// api callling
  const apiData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/" + id
      );
      const json = await response.json();
      setTodo([...todo, json]);
      if (!input) {
        alert("please enter some data");
        setTodo([]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handelChange = (e) => {
    setInput(e.target.value);
    setId(e.target.value);
  };
  const deleteOne = (id) => {
    const deleteItem = [...todo];
    deleteItem.splice(id, 1);
    setTodo(deleteItem);
  };

  return (
    <div>
      <input value={input} onChange={handelChange}></input>
      <button onClick={apiData}>Click me</button>
      <h3>{id}</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todo?.map((todo, id) => (
            <tr key={id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
              <td>
                {todo.completed ? (
                  <button onClick={deleteOne}>Delete</button>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todotask;
