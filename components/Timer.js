import { Fragment } from "react";
import Buttons from "./TimerButtons";
import { useState, useEffect } from "react";
import styles from "./dashboard.module.css";

const Timer = ({ timeObj, updateCss }) => {
  const { hours, minutes, seconds } = timeObj;

  // const hours = 0;
  // const minutes = 25;
  // const seconds = 0;

  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
  const [timerState, setTimerState] = useState("STOP");
  const [pomodoroState, setPomodoroState] = useState("Focus");
  const [roundCount, setRoundCount] = useState(0);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) {
      updatePomodoroState();
      console.log("pomodoroState updated");
      // resetTimer();
    }
    // else if(mins === 0 && secs === 0){
    //     // setTime([hrs - 1, 59, 59]);
    //     updatePomodoroState();
    //     console.log('pomodoroState updated')
    // }
    else if (secs === 0) {
      // setTime([hrs, mins - 1, 59])
      setTime([0, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  useEffect(() => {
    var timerId;

    if (timerState === "START") {
      timerId = setInterval(() => tick(), 1000);
    } else if (timerState === "STOP") {
      clearInterval(timerId);
    } else if (timerState === "RESET") {
      clearInterval(timerId);
    }
    return () => {
      clearInterval(timerId);
    };
  });

  const startTimer = () => {
    console.log("timer started");
    setTimerState("START");
  };

  const stopTimer = () => {
    console.log("timer stopped");
    setTimerState("STOP");
  };

  const resetTimer = () => {
    setTime([hours, minutes, seconds]);
    setTimerState("RESET");
    console.log("timer reset");
  };

  const updatePomodoroState = () => {
    if (pomodoroState === "Focus") {
      if (roundCount > 0 && roundCount % 4 === 0) {
        setPomodoroState("Long Break");
        setTime([0, 20, 0]);
        updateCssStyling("longbreak");
        startTimer();
        console.log("PomodoroState = Long Break");
      } else {
        setPomodoroState("Break");
        setTime([0, 5, 0]);
        updateCssStyling("break");
        startTimer();
        console.log("PomodoroState = Break");
      }
    } else if (pomodoroState === "Break") {
      setPomodoroState("Focus");
      setTime([0, 25, 0]);
      updateCssStyling("focus");
      startTimer();
      console.log("PomodoroState = Focus");
      setRoundCount(roundCount + 1);
    } else if (pomodoroState === "Long Break") {
      setPomodoroState("Focus");
      setTime([0, 25, 0]);
      updateCssStyling("focus");
      startTimer();
      console.log("PomodoroState = Focus");
      setRoundCount(roundCount + 1);
    }
  };

  const updateCssStyling = (state) => {
    updateCss(state);
  };

  return (
    <div className={styles.timerDashboard}>
      <h2>{pomodoroState}</h2>
      {/* <h1>{`${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2, '0')}`}</h1> */}
      <h1>{`${mins.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`}</h1>
      <div className={styles.buttonsContainer}>
        <Buttons type={"Start"} onClick={startTimer} />
        <Buttons type={"Stop"} onClick={stopTimer} />
        <Buttons type={"Reset"} onClick={resetTimer} />
      </div>
      <p>Round {roundCount}</p>
    </div>
  );
};

export default Timer;
