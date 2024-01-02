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
    ]);

    const onDeleteHandler = (id) => {
    if(confirm(`Are you sure you want to delete the task?`)){
        // Elimina el elemento filtrando el arreglo por el id de cada tarea
        // No se puede modificar dado que la variable 'tasks' es INMUTABLE
        const resultado = tasks.filter((tarea) => tarea.id !== id);
        // Modifica el estado 'setTasks'
        setTasks(resultado)
      }
    }
    const onCreateHandler = (text) => {
      // Crear un objeto para la nueva tarea
      const newTask = {
        id: crypto.randomUUID(),
        text,
      }

      // Crear un nuevo arreglo basado en los elementos del arreglo tasks agregando la nueva tarea al final
      const newTasks = [ ...tasks, newTask ]

      // Modificar el estado
      setTasks(newTasks);
    }
  return (
    <div className='app'>
      <Header count={tasks.length}/>
      <AddTaskForm onCreateTask={onCreateHandler} />
      <TaskList tasks={tasks} onDelete={onDeleteHandler}/>
    </div>
  );
}

export default App
 