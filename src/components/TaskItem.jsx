import PropTypes from 'prop-types';
import "../styles/TaskItem.scss";
import { FaTrashAlt} from "react-icons/fa"


const TaskItem = ({ task }) => {

  const onClickHandler = () => {
    console.log(`${task.text} , ${task.id}` );
  }

  return (
    <div className='task'>
        <h3>{task.text}</h3>
        <FaTrashAlt className='delete' onClick={onClickHandler}/>
    </div>
  )
}


TaskItem.propTypes = {
    task: PropTypes.object,
}


export default TaskItem