import PropTypes from 'prop-types';


const TaskList = ({tasks}) => {
  return <>
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

TaskList.propTypes = {
  tasks: PropTypes.array,
}   


export default TaskList;
