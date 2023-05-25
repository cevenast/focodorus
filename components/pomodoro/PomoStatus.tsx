import { useRef, useEffect } from 'react';
import { PomoStatusInterface } from '@/types/pomodoroTypes'
import manageBgAudio from '@/services/pomodoro/manageBgAudio';
import Buttons from './Buttons'
import StatusList from './StatusList'
import CompletedPoms from './CompletedPoms';
import getFormattedTime from '@/services/pomodoro/getFormattedTime';

const PomoStatus = ({isTimerOn, setIsTimerOn, completedPoms, pomodoroStatus, timeLeft, resetPomodoro, handleStatusClick, config, setShowSettings}:PomoStatusInterface) => {
  const bgSound= useRef<HTMLAudioElement>(null)
  useEffect(() => manageBgAudio({ bgSound, config, isTimerOn, pomodoroStatus }),[isTimerOn, config, pomodoroStatus])

  const bgColor = {
    pomo:'bg-pomo-3 hover:bg-pomo-3-light', 
    short:'bg-pomo-1-darker hover:bg-pomo-1-dark', 
    long:'bg-stone-700 hover:bg-stone-600'
  }[pomodoroStatus] // Evaluates pomodoroStatus to get the corresponding colors

  return (
    <div onClick={() => setIsTimerOn(!isTimerOn)} className={`w-64 h-64 pt-11 ${bgColor} rounded-full flex flex-col justify-center transition duration-500 cursor-pointer`}>
      <StatusList pomodoroStatus={pomodoroStatus} handleStatusClick={handleStatusClick}/>

      {/* Pomodoro Timer */}
      <h4 className="text-center text-white text-5xl font-bold mx-auto font-mono">
        {getFormattedTime(timeLeft).minutes}:{getFormattedTime(timeLeft).seconds}
      </h4>

      {/* Completed Pomodoros */}
      {config.autoProgression === true && <CompletedPoms completedPoms={completedPoms}/>}

      {/* Buttons */}
      <Buttons isTimerOn={isTimerOn} setShowSettings={setShowSettings} resetPomodoro={resetPomodoro}/>

      {/* Audio */}
      <audio ref={bgSound} src="/tick-sound.wav" className="invisible h-0"/>  
    </div>
  )
}

export default PomoStatus