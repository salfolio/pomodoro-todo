import styles from './dashboard.module.css';
import {useState ,useRef, useEffect} from 'react';

const AddTask = (props) => {

    // const [input, setInput] = useState('');
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    

    const inputRef = useRef(null);
  
    useEffect(() => {
      inputRef.current.focus();
    });

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmitHandler = (event) => {
        console.log('submithandled');
        event.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text: input,
        })
        setInput('');
    }

    return(
        <form onSubmit={handleSubmitHandler}>
        {props.edit ? (
            <>
            <input 
            className={styles.formInput_edit} 
            type="text" value={input} 
            // placeholder="add task"
            onChange={handleChange}
            ref={inputRef}
            />
            <button className={styles.formSubmitButton} type="submit" name="Submit">Update Item</button>
            </>
        ):(
            <>
            <input 
            className={styles.formInput} 
            type="text" value={input} 
            // placeholder="add task"
            onChange={handleChange}
            ref={inputRef}
            />
            <button className={styles.formSubmitButton} type="submit" name="Submit">Add Task</button>
            </>
        )}
        </form>

    )
}

export default AddTask;