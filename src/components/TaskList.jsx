const tasks = [
  { id: 1, text: "Running" },
  { id: 2, text: "Reading" },
  { id: 3, text: "Playing Videogames" },
  { id: 4, text: "Sleeping" },
];

// const tasks = [];



const TaskList = () => {
  const username = "Jony";
  return <>
  <p>Welcome { username || "guest"}</p>
  {tasks.length < 0 ? <h1> No Hay Tareas</h1> : (
    <ul>
      { tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  )}
  {tasks.length > 0 && <p> Lenght: {tasks.length}</p>}
  </>         
}

   


export default TaskList;
