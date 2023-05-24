import { useState, useEffect } from "react"
import PomoStatus from "./pomodoro/PomoStatus"
import PomodoroSettings from "./pomodoro/PomodoroSettings"
import handleTime from "@/services/pomodoro/handleTime"
import defaultConfig from "../services/pomodoro/defaultConfig"
import manageStatusChange from "@/services/pomodoro/manageStatusChange"
import changeStatus from "@/services/pomodoro/changeStatus"
import resetPomodoro from "@/services/pomodoro/resetPomodoro"

const Pomodoro = () => {
  const [config, setConfig] = useState(defaultConfig)
  const [timeLeft, setTimeLeft] = useState(defaultConfig.time.pomo)
  const [isTimerOn, setIsTimerOn] = useState(false)
  const [completedPoms, setCompletedPoms] = useState<boolean[]>(Array(config.pomodorosPerSet).fill(false))
  const [pomodoroStatus, setPomodoroStatus] = useState<'pomo' | 'short' | 'long'>('pomo')
  const [showSettings, setShowSettings] = useState(false)

  // HANDLE TIME: Pass time and handle end of time  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleTime({ isTimerOn, setIsTimerOn, timeLeft, setTimeLeft, pomodoroStatus, setPomodoroStatus, completedPoms, setCompletedPoms, config}),[timeLeft, isTimerOn])

  // SET TIME ON STATUS CHANGE: When pomodoro status changes, updates timeLeft to the full time for the current status
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => manageStatusChange({ pomodoroStatus, setTimeLeft, config }), [completedPoms, pomodoroStatus])

  // Updates setCompletedPoms array if config is updated
  useEffect(() => {
    if (config.pomodorosPerSet <= completedPoms.length) {
      setCompletedPoms(completedPoms.slice(0,config.pomodorosPerSet))
    }
    else {
      const followingPomos = Array(config.pomodorosPerSet-completedPoms.length).fill(false)
      setCompletedPoms(completedPoms.concat(followingPomos))
    }
  }, [config])
  


  // Changes current pomodoro status on click.
  const handleStatusClick = (e:React.MouseEvent) => changeStatus({ e, isTimerOn, setIsTimerOn, pomodoroStatus, setPomodoroStatus })

  // Resets the time for the current pomodoro or break on click
  const handleResetClick = (e:React.MouseEvent) => resetPomodoro({ e, pomodoroStatus, setTimeLeft, setIsTimerOn, config })

  return(
    <>
    <PomoStatus 
      isTimerOn={isTimerOn} 
      setIsTimerOn={setIsTimerOn} 
      completedPoms={completedPoms} 
      pomodoroStatus={pomodoroStatus} 
      timeLeft={timeLeft} 
      resetPomodoro={handleResetClick} 
      handleStatusClick={handleStatusClick} 
      config={config}
      setConfig={setConfig}
      setShowSettings={setShowSettings}
    />
    {showSettings && <PomodoroSettings config={config} setConfig={setConfig} setShowSettings={setShowSettings} setTimeLeft={setTimeLeft} pomodoroStatus={pomodoroStatus}/>}
    </>
  )
}

export default Pomodoro