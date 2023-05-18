import { useState, useEffect } from "react"
import PomoStatus from "./pomodoro/PomoStatus"

const Pomodoro = () => {
  const [config, setConfig] = useState({})
  const [timeLeft, setTimeLeft] = useState(10)
  const [isTimerOn, setIsTimerOn] = useState(false)
  const [completedPoms, setCompletedPoms] = useState([false,false,false,false])
  const [pomodoroStatus, setPomodoroStatus] = useState<'pomo' | 'short' | 'long'>('pomo')

  useEffect(() => {
    let timer:NodeJS.Timer | undefined
    // Pass second
    if (isTimerOn && timeLeft > -0){
      timer = setInterval(() => setTimeLeft(timeLeft-1), 1000)
    }

    // If timer has reached 00:00
    else if (timeLeft === 0){
      setTimeout(() => jaja(), 1000 )
      // if what was completed was a pomodoro, add to completedPoms and go to short or long break.
      const jaja = () => {
      if (pomodoroStatus === 'pomo') {
        const b = [...completedPoms]
        b.unshift(true)
        b.pop()
        setCompletedPoms(b)
        b.filter(pom => pom === true).length < completedPoms.length ? setPomodoroStatus('short') : setPomodoroStatus('long')
      }
      // If a short break was completed, go to next pomodoro.
      else if (pomodoroStatus === 'short') {
        setPomodoroStatus('pomo')
      }
      else{
        alert('yessss')
        setCompletedPoms([false,false,false,false])
        setPomodoroStatus('pomo')
      }
    }
    }
    return () => clearInterval(timer)
  },[timeLeft, isTimerOn])


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

  const handleStatusClick = (e:React.MouseEvent) => {
    e.stopPropagation()
    const newStatus = e.target as HTMLElement
    if (pomodoroStatus === 'pomo'){
      alert('stop current pomodoro?')
    }
    else if (e.target as HTMLLIElement) {
      setPomodoroStatus(newStatus.id as 'pomo'| 'short'| 'long')
    }
  }

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

  const minutes = Math.floor(timeLeft/60)
  const seconds = Math.floor(timeLeft%60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  const iconsSize = '2.5em'

  return(
    <PomoStatus isTimerOn={isTimerOn} setIsTimerOn={setIsTimerOn} completedPoms={completedPoms} pomodoroStatus={pomodoroStatus} minutes={minutes} seconds={seconds} resetPomodoro={resetPomodoro} handleStatusClick={handleStatusClick}/>
  )

}

export default Pomodoro