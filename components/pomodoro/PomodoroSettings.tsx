import { useState } from 'react'
import { PomodoroSettingsInterface } from "@/types/pomodoroTypes"
import changeNumberByOne from '@/services/pomodoro/settings/changeNumberByOne'
import changeNumber from '@/services/pomodoro/settings/changeNumber'
import saveNewSettings from '@/services/pomodoro/settings/saveNewSettings'
import OptionCategories from './Settings/OptionCategories'
import TimerOptions from './Settings/TimerOptions'
import SoundOptions from './Settings/SoundOptions'

const PomodoroSettings = ({ config, setConfig, setShowSettings, setTimeLeft, pomodoroStatus }:PomodoroSettingsInterface) => {
  const [activeCategory, setActiveCategory] = useState<'timer' | 'sound'>('timer')
  const [pomotime, setPomotime] = useState(String(Math.floor(config.time.pomo/60)))
  const [shorttime, setShorttime] = useState(String(Math.floor(config.time.short/60)))
  const [longtime, setLongtime] = useState(String(Math.floor(config.time.long/60)))
  const [pomodorosPerSet, setPomodorosPerSet] = useState(config.pomodorosPerSet)
  const [autoProgression, setAutoprogression] = useState(config.autoProgression)
  const [soundOn, setSoundOn] = useState(true)

  const handlePlus = (e:React.MouseEvent) => changeNumberByOne({ e, setPomotime, setShorttime, setLongtime, setPomodorosPerSet })

  const handleNumberChange = (e:React.ChangeEvent) => changeNumber({ e, setPomotime, setShorttime, setLongtime, setPomodorosPerSet})
  
  const handleSaveNewSettings = (e:React.FormEvent) => {
    e.preventDefault()
    saveNewSettings({ e, setConfig, setTimeLeft, pomodoroStatus})
  }

  return (
    <section className="fixed top-40 right-40 w-96 h-80 bg-neutral-800 text-white rounded-lg ">
      <OptionCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
      <div className="pl-9 pr-3 pt-6">
        <form onSubmit={e => handleSaveNewSettings(e)}>
          <TimerOptions 
          handleSaveNewSettings={handleSaveNewSettings} 
          handlePlus={handlePlus} 
          autoProgression={autoProgression} 
          setAutoprogression={setAutoprogression} 
          handleNumberChange={handleNumberChange} 
          pomotime={pomotime} shorttime={shorttime} longtime={longtime} 
          pomodorosPerSet={pomodorosPerSet}
          activeCategory={activeCategory}
        />
        <SoundOptions activeCategory={activeCategory} soundOn={soundOn} setSoundOn={setSoundOn}/>
          <button type="submit" className="absolute right-4 bottom-2">SAVE</button>
        </form>
      </div>
      <button className="absolute right-4 top-2" onClick={() => setShowSettings(false) }>X</button>
    </section>
  )
}

export default PomodoroSettings