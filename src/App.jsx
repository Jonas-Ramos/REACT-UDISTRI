import { useEffect, useState } from "react"; 
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import "./styles/App.scss";
import axios from "axios";

function App() {
  
    // ARREGLO INMUTABLE
    // tasks = variable que contiene el estado
    // setTasks = función que permite modificar el estado

  const [ tasks, setTasks ] = useState([]);

  // useEffect se ejecuta una sola vez cuando se monta el componente
    useEffect(()=>{
      const getTasks = async ()=>{
        try {
          // Hacer la petición al backend
        const resultado = await axios.get("http://127.0.0.1:3000/tasks");

        // Verifica el éxito de la petición
        if (resultado.status === 200) {
          // Modifica el estado
          setTasks(resultado.data);
          }
      } catch (error) {
          alert("No hubo conexión con el servidor \nInténtelo más tarde...");
        }
      }
      // Invocar función para comunicarse con el backend
      getTasks()
    }, []);

    const onDeleteHandler = (id) => {
    if(confirm(`Are you sure you want to delete the task?`)){
        // Elimina el elemento filtrando el arreglo por el id de cada tarea
        // No se puede modificar dado que la variable 'tasks' es INMUTABLE
        const resultado = tasks.filter((tarea) => tarea.id !== id);
        // Modifica el estado 'setTasks'
        setTasks(resultado)
      }
    }
    const onCreateHandler = async (text) => {
      // Crear un objeto para la nueva tarea
      const newTask = {
        text,
      }

      const resultado = await axios.post("http://127.0.0.1:3000/tasks", newTask);
      // Crear un nuevo arreglo basado en los elementos del arreglo tasks agregando la nueva tarea al final
      const newTasks = [ ...tasks, resultado.data ]

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
 