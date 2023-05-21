import { useState, useEffect } from "react"
import PomoStatus from "./pomodoro/PomoStatus"
import handleCompleteTimer from "../services/pomodoro/handleCompleteTimer"
import defaultConfig from "../services/pomodoro/defaultConfig"
import manageStatusChange from "@/services/pomodoro/manageStatusChange"

const Pomodoro = () => {
  const [config, setConfig] = useState(defaultConfig)
  const [timeLeft, setTimeLeft] = useState(defaultConfig.time.pomo)
  const [isTimerOn, setIsTimerOn] = useState(false)
  const [completedPoms, setCompletedPoms] = useState([false,false,false,false])
  const [pomodoroStatus, setPomodoroStatus] = useState<'pomo' | 'short' | 'long'>('pomo')

  // Pass time and handle end of time  
  useEffect(() => {
    let timer:NodeJS.Timer | undefined

    if (isTimerOn && timeLeft > -0){ // Pass second
      timer = setInterval(() => setTimeLeft(timeLeft-1), 1000)
      return () => clearInterval(timer)
    }

    else if (timeLeft === 0) { // If timer has reached 00:00
      // if what was completed was a pomodoro, add to completedPoms and go to short or long break.
      // If a short break was completed, go to next pomodoro.
      setTimeout(() => handleCompleteTimer({pomodoroStatus, setPomodoroStatus, completedPoms, setCompletedPoms, setIsTimerOn, setTimeLeft}), 1000 )
    }
    
  },[timeLeft, isTimerOn])

  // When pomodoro status changes, updates timeLeft to the full time for the current status
  useEffect(() => manageStatusChange({ pomodoroStatus, setTimeLeft, config }), [completedPoms, pomodoroStatus])

  // Changes current pomodoro status on click.
  const handleStatusClick = (e:React.MouseEvent) => {
    e.stopPropagation()
    setIsTimerOn(false)
    const newStatus = e.target as HTMLElement
    if (pomodoroStatus === 'pomo' && isTimerOn == true){
      alert('stop current pomodoro?')
    }
    if (e.target as HTMLLIElement) {
      setPomodoroStatus(newStatus.id as 'pomo'| 'short'| 'long')
    }
  }

  // Resets the time for the current pomodoro or break on click
  const resetPomodoro = (e:React.MouseEvent) => {
    e.stopPropagation()
    setTimeLeft(config.time[pomodoroStatus])
    setIsTimerOn(false)
  }

  const resetWarning = <div className="h-12 w-40 fixed">
    <p>Are you sure you want to restart the current pomodoro?</p>
      <button>Keep working</button>
      <button>Yes, Restart</button>
  </div>

  return(
    <PomoStatus isTimerOn={isTimerOn} setIsTimerOn={setIsTimerOn} completedPoms={completedPoms} pomodoroStatus={pomodoroStatus} timeLeft={timeLeft} resetPomodoro={resetPomodoro} handleStatusClick={handleStatusClick} config={config}/>
  )
}

export default Pomodoro