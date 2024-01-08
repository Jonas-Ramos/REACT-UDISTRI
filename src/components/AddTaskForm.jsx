import "../styles/Form.scss"
import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

const AddTaskForm = ({ onCreateTask }) => {
  const [ text, setText ] = useState("");
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setCount(text.length)
  }, [text])

  const handleSubmit = (e) => {
    // Previene que se envíe información al servidor refrescando la página
    e.preventDefault();
    if(!text){
      // Valida que el usuario haya digitado
      alert("You must type the text of the task")
      return;
    }
    // Envía la nueva tarea al componente padre
    onCreateTask(text)

    // Limpia el formulario
    setText("")
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">New Task: </label>
      <small>Type Characters: {count}</small>
      <input value={text} type="text" className="form__input" 
      onChange={(e) => setText(e.target.value)}/>
      <button className="form__button">Add</button>
    </form>
  )
}

AddTaskForm.propTypes = {
  onCreateTask: PropTypes.func,
}
export default AddTaskForm