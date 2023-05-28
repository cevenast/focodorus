import { useState } from 'react'
import { PomodoroSettingsInterface } from "@/types/pomodoroTypes"
import changeNumberByOne from '@/services/pomodoro/settings/changeNumberByOne'
import changeNumber from '@/services/pomodoro/settings/changeNumber'
import saveNewSettings from '@/services/pomodoro/settings/saveNewSettings'
import OptionCategories from './Settings/OptionCategories'
import TimerOptions from './Settings/TimerOptions'

const PomodoroSettings = ({ config, setConfig, setShowSettings, setTimeLeft, pomodoroStatus }:PomodoroSettingsInterface) => {
  const [pomotime, setPomotime] = useState(String(Math.floor(config.time.pomo/60)))
  const [shorttime, setShorttime] = useState(String(Math.floor(config.time.short/60)))
  const [longtime, setLongtime] = useState(String(Math.floor(config.time.long/60)))
  const [pomodorosPerSet, setPomodorosPerSet] = useState(config.pomodorosPerSet)
  const [autoProgression, setAutoprogression] = useState(config.autoProgression)

  const handlePlus = (e:React.MouseEvent) => changeNumberByOne({ e, setPomotime, setShorttime, setLongtime, setPomodorosPerSet })

  const handleNumberChange = (e:React.ChangeEvent) => changeNumber({ e, setPomotime, setShorttime, setLongtime, setPomodorosPerSet})
  
  const handleSaveNewSettings = (e:React.FormEvent) => {
    e.preventDefault()
    saveNewSettings({ e, setConfig, setTimeLeft, pomodoroStatus})
  }

  return (
    <section className="fixed top-40 right-40 w-96 h-80 bg-neutral-800 text-white rounded-lg p-2 ">
      <OptionCategories/>
      <TimerOptions 
        handleSaveNewSettings={handleSaveNewSettings} 
        handlePlus={handlePlus} 
        autoProgression={autoProgression} 
        setAutoprogression={setAutoprogression} 
        handleNumberChange={handleNumberChange} 
        pomotime={pomotime} shorttime={shorttime} longtime={longtime} 
        pomodorosPerSet={pomodorosPerSet}  
      />
      <button className="absolute right-4 top-2" onClick={() => setShowSettings(false) }>X</button>
    </section>
  )
}

export default PomodoroSettings