interface PomoStatusInterface {
  isTimerOn: boolean
  setIsTimerOn: Function
  completedPoms: boolean[]
  pomodoroStatus: 'pomo' | 'short' | 'long'
  minutes: number
  seconds: string
  resetPomodoro: MouseEventHandler
  handleStatusClick: MouseEventHandler
}

import { MouseEventHandler } from 'react';
import Buttons from './Buttons'

const PomoStatus = ({isTimerOn, setIsTimerOn, completedPoms, pomodoroStatus, minutes, seconds, resetPomodoro, handleStatusClick}:PomoStatusInterface) => {

  return (
    <div onClick={() => setIsTimerOn(!isTimerOn)} className="w-60 h-60 pt-16 bg-pomo-3 hover:bg-pomo-3-light rounded-full flex flex-col justify-center transition duration-500 cursor-pointer">
      <ul className="flex justify-center">
        <li id="pomo" className={`${pomodoroStatus == 'pomo' ? 'bg-white text-black' : 'text-white'} text-center`} onClick={handleStatusClick}>Pomodoro</li>
        <li id="short" className={`${pomodoroStatus == 'short' ? 'bg-white text-black' : 'text-white'} text-center`} onClick = {handleStatusClick}>Short Break</li>
        <li id="long" className={`${pomodoroStatus == 'long' ? 'bg-white text-black' : 'text-white'} text-center`} onClick = {handleStatusClick}>Long Break</li>
      </ul>
      {/* Pomodoro */}
      <h4 className="text-center text-white text-5xl font-bold mx-auto font-mono">{minutes}:{seconds}</h4>

      {/* Completed Pomodoros */}
      <div className="text-center">
        {completedPoms.map((pom, i) => <span key={i} className={`${pom ? 'bg-green-800' : 'bg-neutral-800'} inline-block h-3 w-3 rounded-full mx-1`}></span>)}
      </div>

      {/* Buttons */}
      <Buttons isTimerOn={isTimerOn} resetPomodoro={resetPomodoro}/>
    </div>
  )
}

export default PomoStatus