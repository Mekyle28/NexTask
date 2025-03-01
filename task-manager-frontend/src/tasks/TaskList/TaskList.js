import "./TaskList.scss"
import TaskItem from '../TaskItem/TaskItem'
import { useSelector } from 'react-redux';

function TaskList() {
  const { tasks } = useSelector((state) => state.task)
  
  return (
    <div className='task-list-container'>
      {tasks.length === 0 ? <p>No tasks added yet!</p> : 
        tasks.map(task => <TaskItem key={task.id} task={task} />)}
    </div>
  );
}

export default TaskList;

