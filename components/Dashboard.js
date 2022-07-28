import Timer from './Timer'; 
import styles from './dashboard.module.css';
import AddTask from './AddTask';
import TaskList from './TaskList';
import {useState} from 'react';

const Dashboard = () => {

   const timeObj = {hours: 0, minutes: 25, seconds: 0}
   const [pomodoroState, setPomodoroState] = useState('focus')
   const [stylesVal, setStyleVal] = useState(styles.container);

   const updateCss = (state) => {
        if(state === 'break'){
            setPomodoroState('break');
            setStyleVal(styles.container_break);
            
        }
        else if(state === 'focus'){
            setPomodoroState('focus')
            setStyleVal(styles.container);

        }
        else if(state === 'longbreak'){
            setPomodoroState('longbreak')
            setStyleVal(styles.container_longbreak);
        }
   }

    return (
        <div className={stylesVal}>
            <Timer
                timeObj = {timeObj}
                updateCss = {updateCss}
            />
        <hr className={styles.divider}/>

        <div className={styles.taskDiv}>
            <TaskList/>
        </div>
        </div>
    );
}

export default Dashboard; 