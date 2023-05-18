import { useState, useEffect } from "react"
import PomoStatus from "./pomodoro/pomoStatus"
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'
import { VscDebugRestart } from 'react-icons/vsc'
import { RiSettings3Fill } from 'react-icons/ri'

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
    const newStatus = e.target.id
    if (pomodoroStatus === 'pomo'){
      alert('stop current pomodoro?')
    }
    else if (e.target as HTMLLIElement) {
      setPomodoroStatus(newStatus)
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

  // if (pomodoroStatus === 'pomo'){
  //   return <PomoStatus isTimerOn={isTimerOn} setIsTimerOn={setIsTimerOn} completedPoms={completedPoms} pomodoroStatus={pomodoroStatus} minutes={minutes} seconds={seconds} resetPomodoro={resetPomodoro}/>
  // }

  // else if (pomodoroStatus === 'short'){
  //   return <PomoStatus isTimerOn={isTimerOn} setIsTimerOn={setIsTimerOn} completedPoms={completedPoms} pomodoroStatus={pomodoroStatus} minutes={minutes} seconds={seconds} resetPomodoro={resetPomodoro}/>
  // }
  return(
    <div onClick={() => setIsTimerOn(!isTimerOn)} className="w-60 h-60 pt-16 bg-pomo-3 hover:bg-pomo-3-light rounded-full flex flex-col justify-center transition duration-500 cursor-pointer">
      <ul className="flex">
        <li id="pomo" className={`${pomodoroStatus == 'pomo' ? 'bg-white text-black' : 'text-white'}`}>Pomodoro</li>
        <li id="short" className={`${pomodoroStatus == 'short' ? 'bg-white text-black' : 'text-white'}`} onClick = {handleStatusClick}>Short Break</li>
        <li id="long" className={`${pomodoroStatus == 'long' ? 'bg-white text-black' : 'text-white'}`} onClick = {handleStatusClick}>Long Break</li>
      </ul>
      {/* Pomodoro */}
      <h4 className="text-center text-white text-5xl font-bold mx-auto font-mono">{minutes}:{seconds}</h4>

      {/* Completed Pomodoros */}
      <div className="text-center">
        {completedPoms.map((pom, i) => <span key={i} className={`${pom ? 'bg-green-800' : 'bg-neutral-800'} inline-block h-3 w-3 rounded-full mx-1`}></span>)}
      </div>

      {/* Buttons */}
      <div className="text-center pt-4">

        {/* Play or Pause Indicator */}
        <button className="text-neutral-900 hover:text-neutral-700">
          {isTimerOn ? 
            <BsFillPauseFill size={iconsSize}/> : 
            <BsFillPlayFill size={iconsSize} />
          }
        </button>

        {/* Reset Button */}
        <button className="text-neutral-900 hover:text-neutral-700" onClick={resetPomodoro}> 
          <VscDebugRestart size={iconsSize} /> 
        </button>

        {/* Settings Button */}
        <button className="text-neutral-900 hover:text-neutral-700">
          <RiSettings3Fill size={iconsSize}/>
        </button>
      </div>
    </div>
  )

}

export default Pomodoro