import styles from './dashboard.module.css'
import AddTask from './AddTask';
import {useState} from 'react'
import Task from './Task';

const TaskList = () => {

    const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        if(!task.text || /^\s*$/.test(task.text)) {
            return;
        }
        const newTasks = [task, ...tasks];
        setTasks(newTasks);
        console.log(task, ...tasks)
    } 

    const removeTask = (id) => {
        const filteredTasks = [...tasks].filter(task => task.id !== id)
        setTasks(filteredTasks);
    }

    const editTask = (taskId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }        
        setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)));
    }

    const completeTask = (id) => {
        let updatedTasks = tasks.map(task => {
          if (task.id === id) {
            task.isComplete = !task.isComplete;
          }
          return task;
        });
        setTasks(updatedTasks);
      };

    return(
        <div className={styles.taskContainer}>
            
            <AddTask onSubmit={addTask} />
            <div className={styles.taskList}>
                <Task 
                    tasks={tasks}
                    removeTask={removeTask}
                    editTask={editTask}
                    completeTask={completeTask}
                />
            </div>
        </div>
    )
}

export default TaskList;