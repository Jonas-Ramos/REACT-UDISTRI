import { useState } from "react";

[
  { id: 1, text: "Running" },
  { id: 2, text: "Reading" },
  { id: 3, text: "Playing Videogames" },
  { id: 4, text: "Sleeping" },
];

// const tasks = [];

// let username = "Jony";
// const [ username, setUsername ] = useState("Jony");


const TaskList = () => {


    // ARREGLO INMUTABLE
    // tasks = variable que contiene el estado
    // setTasks = función que permite modificar el estado
  const [ tasks, setTasks ] = useState(
    [
      { id: 1, text: "Running" },
      { id: 2, text: "Reading" },
      { id: 3, text: "Playing Videogames" },
      { id: 4, text: "Sleeping" },
    ]);


  return <>
  {/* <p>Welcome { username || "guest"}</p> */}
  {tasks.length === 0 ? 
    <h3> No Hay Tareas</h3> : (
    <>
      { tasks.map((task) => (
        <h4 key={task.id}>{task.text}</h4>
      ))}
    </>
  )}
  {tasks.length > 0 && <p> Lenght: {tasks.length}</p>}
  </>         
}

   


export default TaskList;
