import { useRef, useEffect } from 'react';
import { PomoStatusInterface } from '@/types/pomodoroTypes'
import manageBgAudio from '@/services/pomodoro/manageBgAudio';
import Buttons from './Buttons'
import StatusList from './StatusList'

const PomoStatus = ({isTimerOn, setIsTimerOn, completedPoms, pomodoroStatus, timeLeft, resetPomodoro, handleStatusClick, config}:PomoStatusInterface) => {
  let bgSound= useRef<HTMLAudioElement>(null)

  useEffect(() => manageBgAudio({ bgSound, config, isTimerOn }),[isTimerOn, config])

  const minutes = Math.floor(timeLeft/60)
  const seconds = Math.floor(timeLeft%60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  const bgColor = {'pomo':'pomo-3', 'short':'pomo-1', 'long':'blue-400'}

  return (
    <div onClick={() => setIsTimerOn(!isTimerOn)} className={`w-60 h-60 pt-16 bg-${bgColor[pomodoroStatus]} hover:bg-pomo-3-light rounded-full flex flex-col justify-center transition duration-500 cursor-pointer`}>
      <StatusList pomodoroStatus={pomodoroStatus} handleStatusClick={handleStatusClick}/>
      {/* Pomodoro */}
      <h4 className="text-center text-white text-5xl font-bold mx-auto font-mono">{minutes}:{seconds}</h4>

      {/* Completed Pomodoros */}
      <div className="text-center">
        {completedPoms.map((pom, i) => <span key={i} className={`${pom ? 'bg-green-800' : 'bg-neutral-800'} inline-block h-3 w-3 rounded-full mx-1`}></span>)}
      </div>

      {/* Buttons */}
      <Buttons isTimerOn={isTimerOn} resetPomodoro={resetPomodoro}/>

      {/* Audio */}
      <audio ref={bgSound} controls src="/tick-sound.wav" className="invisible"/>
    </div>
  )
}

export default PomoStatus