import { useState } from "react"; 
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import "./styles/App.scss";

function App() {
  
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

    const onDeleteHandler = (id) => {
    if(confirm(`Are you sure you want to delete the task ${id}`)){
        // Elimina el elemento filtrando el arreglo por el id de cada tarea
        const resultado = tasks.filter((tarea) => tarea.id !== id);
        setTasks(resultado)
      }
    }
  return (
    <div className='app'>
      <Header count={tasks.length}/>
      <AddTaskForm />
      <TaskList tasks={tasks} onDelete={onDeleteHandler}/>
    </div>
  );
}

export default App
 