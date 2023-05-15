import { useState, useEffect } from "react"
import { BsFillPlayFill, BsFillPauseFill, BsFillStopFill } from 'react-icons/bs'

const Pomodoro = () => {
  const [timeLeft, setTimeLeft] = useState(10)
  const [isTimerOn, setIsTimerOn] = useState(false)

  useEffect(() => {
    let timer:NodeJS.Timer | undefined
    if (isTimerOn && timeLeft > 0){
      timer = setInterval(() => setTimeLeft(timeLeft-1), 1000)
    }
    return () => clearInterval(timer)
  },[timeLeft, isTimerOn])

  const resetPomodoro = (e:React.MouseEvent) => {
    e.stopPropagation()
    setTimeLeft(1500)
    setIsTimerOn(false)
  }

  const iconsSize = '2.5em'

  const minutes = Math.floor(timeLeft/60)
  const seconds = Math.floor(timeLeft%60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

  return(
    <div>
      <div onClick={() => setIsTimerOn(!isTimerOn)} className="w-60 h-60 bg-pomo-3 rounded-full flex flex-col justify-center cursor-pointer">
        <h4 className="text-center text-white text-4xl font-bold mx-auto">{minutes}:{seconds}</h4>

      </div>
    </div>
  )
}

export default Pomodoro