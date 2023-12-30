import PropTypes from 'prop-types';
import "../styles/TaskItem.scss";
import { FaTrashAlt} from "react-icons/fa"


const TaskItem = ({ task, onDelete }) => {
  return (
    <div className='task'>
        <h3>{task.text}</h3>
        <FaTrashAlt className='delete' onClick={()=> onDelete(task.id)}/>
    </div>
  )
}


TaskItem.propTypes = {
    task: PropTypes.object,
    onDelete: PropTypes.func,
}


export default TaskItem