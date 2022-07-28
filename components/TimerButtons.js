import styles from './dashboard.module.css'

const TimerButtons = (props) => {
    return(
        <div className={styles.timerButtons}><button onClick={props.onClick}>{props.type}</button></div>
    )
}

export default TimerButtons;