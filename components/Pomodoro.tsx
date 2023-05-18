import { useState, useEffect } from "react"
import PomoStatus from "./pomodoro/PomoStatus"
import handleCompleteTimer from "./pomodoro/handleCompleteTimer"

const Pomodoro = () => {
  // const [config, setConfig] = useState({})
  const [timeLeft, setTimeLeft] = useState(10)
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
  useEffect(() => {
    if (pomodoroStatus === 'pomo'){
      setTimeLeft(2)
    }
    else if (pomodoroStatus === 'short'){
      setTimeLeft(4)
    }
    else{
      setTimeLeft(8)
    }
    // setIsTimerOn(false)
  }, [completedPoms, pomodoroStatus])

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

  // Resets the time for the current pomodoro or break
  const resetPomodoro = (e:React.MouseEvent) => {
    e.stopPropagation()
    setTimeLeft(10)
    setIsTimerOn(false)
  }

  const resetWarning = <div className="h-12 w-40 fixed">
    <p>Are you sure you want to restart the current pomodoro?</p>
      <button>Keep working</button>
      <button>Yes, Restart</button>
  </div>

  return(
    <PomoStatus isTimerOn={isTimerOn} setIsTimerOn={setIsTimerOn} completedPoms={completedPoms} pomodoroStatus={pomodoroStatus} timeLeft={timeLeft} resetPomodoro={resetPomodoro} handleStatusClick={handleStatusClick}/>
  )
}

export default Pomodoro