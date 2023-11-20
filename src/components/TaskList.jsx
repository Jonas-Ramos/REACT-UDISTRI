const tasks = [
    {id: 1, text: "Running"},
    {id: 2, text: "Reading"},
    {id: 3, text: "Playing Videogames"},
    {id: 4, text: "Sleeping"},
];


const TaskList = () => {
  return (
        <ul>
            {
                tasks.map( task => <li key={task.id}>{task.text}</li> )
            }
        </ul>
    
  )

}

export default TaskList