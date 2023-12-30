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
  return (
    <div className='app'>
      <Header />
      <AddTaskForm />
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App
 