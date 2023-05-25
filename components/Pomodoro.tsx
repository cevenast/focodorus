import { useState, useEffect } from "react"
import PomoStatus from "./pomodoro/PomoStatus"
import PomodoroSettings from "./pomodoro/PomodoroSettings"
import handleTime from "@/services/pomodoro/handleTime"
import defaultConfig from "../services/pomodoro/defaultConfig"
import manageStatusChange from "@/services/pomodoro/manageStatusChange"
import changeStatus from "@/services/pomodoro/changeStatus"
import resetPomodoro from "@/services/pomodoro/resetPomodoro"
import getFormattedTime from "@/services/pomodoro/getFormattedTime"
import updateCompletedPoms from "@/services/pomodoro/updateCompletedPoms"
import Head from "next/head"

const Pomodoro = () => {
  const [config, setConfig] = useState(defaultConfig)
  const [timeLeft, setTimeLeft] = useState(defaultConfig.time.pomo)
  const [isTimerOn, setIsTimerOn] = useState(false)
  const [completedPoms, setCompletedPoms] = useState<boolean[]>(Array(config.pomodorosPerSet).fill(false))
  const [pomodoroStatus, setPomodoroStatus] = useState<'pomo' | 'short' | 'long'>('pomo')
  const [showSettings, setShowSettings] = useState(false)

  // HANDLE TIME: Pass time and handle end of time (change to break, add completed pomodoro, go to next pomodoro )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleTime({ isTimerOn, setIsTimerOn, timeLeft, setTimeLeft, pomodoroStatus, setPomodoroStatus, completedPoms, setCompletedPoms, config}),[timeLeft, isTimerOn])

  // SET TIME ON STATUS CHANGE: When pomodoro status changes, updates timeLeft to the full time for the current status
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => manageStatusChange({ pomodoroStatus, setTimeLeft, config }), [completedPoms, pomodoroStatus])

  // Updates setCompletedPoms array if config is updated to track the completed poms and how many are left
  useEffect(() => updateCompletedPoms({ config, completedPoms, setCompletedPoms}), [config])

  // Changes current pomodoro status on click.
  const handleStatusClick = (e:React.MouseEvent) => changeStatus({ e, isTimerOn, setIsTimerOn, pomodoroStatus, setPomodoroStatus })

  // Resets the time for the current pomodoro or break on click
  const handleResetClick = (e:React.MouseEvent) => resetPomodoro({ e, pomodoroStatus, setTimeLeft, setIsTimerOn, config })

  // Returns boolean that specifies if the timer should be displayed in the head title of the page 
  const displayTimeTitle = () => isTimerOn || timeLeft < config.time[pomodoroStatus]

  return(
    <>
    <Head>
      <title>{displayTimeTitle() ? `${getFormattedTime(timeLeft).minutes}:${getFormattedTime(timeLeft).seconds} | Focodorus` : 'Focodorus'}</title>
    </Head>

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