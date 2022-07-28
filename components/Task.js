import React from 'react'
import {useState} from 'react'
import {AiFillDelete,AiFillEdit } from 'react-icons/ai'
import {TiEidt} from 'react-icons/ti'
import {ImCheckboxUnchecked} from 'react-icons/im';
import {ImCheckboxChecked} from 'react-icons/im';

import AddTask from './AddTask'
import styles from './dashboard.module.css'

export default function Task({tasks, removeTask, editTask, completeTask}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        editTask(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <AddTask edit={edit} onSubmit={submitUpdate} />
    }

    return tasks.map((task, index) => (
        <div key={index} className={styles.taskrow} className={task.isComplete ? styles.taskrow_complete : styles.taskrow}>
            <div className={styles.taskitemdiv} onClick={() => completeTask(task.id)}>
                {task.isComplete ? 
                <div className={styles.icon}>
                    <ImCheckboxChecked/>
                </div> : 
                <div className={styles.icon}>
                    <ImCheckboxUnchecked/>
                </div>
                }
                {task.text}
            </div>
            <div className={styles.icons}>
                <div className={styles.icon} onClick={() => setEdit({id: task.id, value: task.text})}><AiFillEdit/></div>
                <div className={styles.icon} onClick={() => removeTask(task.id)}><AiFillDelete/></div>
            </div>
        </div>
        
    )) 
}
