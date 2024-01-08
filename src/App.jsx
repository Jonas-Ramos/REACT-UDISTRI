import { useEffect, useState } from "react"; 
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import "./styles/App.scss";
import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_URL;
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
        const resultado = await axios.get(URL);

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

    const onDeleteHandler = async (id) => {
    if(confirm(`Are you sure you want to delete the task?`)){
      try {     
        //Elimina la tarea del backend
        const result = await axios.delete(`${URL}${id}`);

        if(result.status === 200) {
          // No se puede modificar dado que la variable 'tasks' es INMUTABLE
          // Elimina el elemento filtrando el arreglo por el id de cada tarea
          const resultado = tasks.filter((tarea) => tarea.id !== id);
          // // Modifica el estado 'setTasks'
          setTasks(resultado)
        }
      } catch (error) {
        alert("No fue posible eliminar la tarea")
        console.log(error);
      }
    }
  }
    const onCreateHandler = async (text) => {
      // Crear un objeto para la nueva tarea
      try {
        const newTask = {
          text,
        }
  
        const resultado = await axios.post(URL, newTask);
        // Crear un nuevo arreglo basado en los elementos del arreglo tasks agregando la nueva tarea al final
        if( resultado.status === 201){
          const newTasks = [ ...tasks, resultado.data ]
  
        // Modificar el estado
        setTasks(newTasks);
        }
      } catch (error) {
        alert("No fue posible la creación de la tarea \n Intente más tarde");
      }
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
 