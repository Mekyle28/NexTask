import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './store/taskSlice';
import TaskList from "./tasks/TaskList/TaskList";
import { useEffect } from 'react';
import TaskForm from './tasks/TaskForm/TaskForm';

function App() {

  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.task)
  

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) return <p>loading tacks...</p>
  if (error) return <p>Error: {error}</p>
  
console.log("Redux State:", { tasks, loading, error });
  return (
     <div className="App">
      <header className="App-header">
        <h1>NexTask</h1>
      </header>
      <div className="task-container">
        <TaskList />
        <div className="task-form-container">  
          <TaskForm />
        </div>
      </div>  
    </div>
    
  );
}

export default App;





