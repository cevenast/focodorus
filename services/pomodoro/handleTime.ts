import handleCompleteTimer from "./handleCompleteTimer"
import { handleTimeInterface } from "@/types/pomodoroTypes"

const handleTime = ({ isTimerOn, setIsTimerOn, timeLeft, setTimeLeft, pomodoroStatus, setPomodoroStatus, completedPoms, setCompletedPoms, config}:handleTimeInterface) => {
  let timer:NodeJS.Timer | undefined

  if (isTimerOn && timeLeft > -0){ // Pass second
    timer = setInterval(() => setTimeLeft(timeLeft-1), 1000)
    return () => clearInterval(timer)
  }

  else if (timeLeft === 0) { // If timer has reached 00:00
    // if what was completed was a pomodoro, add to completedPoms and go to short or long break.
    // If a short break was completed, go to next pomodoro.
    setTimeout(() => handleCompleteTimer({pomodoroStatus, setPomodoroStatus, completedPoms, setCompletedPoms, setIsTimerOn, setTimeLeft, config}), 1000 )
  }
}

export default handleTime