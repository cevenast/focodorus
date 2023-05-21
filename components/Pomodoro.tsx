import { useState, useEffect } from "react"
import PomoStatus from "./pomodoro/PomoStatus"
import handleTime from "@/services/pomodoro/handleTime"
import defaultConfig from "../services/pomodoro/defaultConfig"
import manageStatusChange from "@/services/pomodoro/manageStatusChange"
import changeStatus from "@/services/pomodoro/changeStatus"
import resetPomodoro from "@/services/pomodoro/resetPomodoro"

const Pomodoro = () => {
  const [config, setConfig] = useState(defaultConfig)
  const [timeLeft, setTimeLeft] = useState(defaultConfig.time.pomo)
  const [isTimerOn, setIsTimerOn] = useState(false)
  const [completedPoms, setCompletedPoms] = useState([false,false,false,false])
  const [pomodoroStatus, setPomodoroStatus] = useState<'pomo' | 'short' | 'long'>('pomo')

  // Pass time and handle end of time  
  useEffect(() => handleTime({ isTimerOn, setIsTimerOn, timeLeft, setTimeLeft, pomodoroStatus, setPomodoroStatus, completedPoms, setCompletedPoms}),[timeLeft, isTimerOn])

  // When pomodoro status changes, updates timeLeft to the full time for the current status
  useEffect(() => manageStatusChange({ pomodoroStatus, setTimeLeft, config }), [completedPoms, pomodoroStatus])

  // Changes current pomodoro status on click.
  const handleStatusClick = (e:React.MouseEvent) => changeStatus({ e, isTimerOn, setIsTimerOn, pomodoroStatus, setPomodoroStatus })

  // Resets the time for the current pomodoro or break on click
  const handleResetClick = (e:React.MouseEvent) => resetPomodoro({ e, pomodoroStatus, setTimeLeft, setIsTimerOn, config })

  return(
    <PomoStatus 
      isTimerOn={isTimerOn} 
      setIsTimerOn={setIsTimerOn} 
      completedPoms={completedPoms} 
      pomodoroStatus={pomodoroStatus} 
      timeLeft={timeLeft} 
      resetPomodoro={handleResetClick} 
      handleStatusClick={handleStatusClick} 
      config={config}/>
  )
}

export default Pomodoro