import { useState } from 'react'
import { PomodoroSettingsInterface } from "@/types/pomodoroTypes"
import Switch from '@mui/material/Switch'
import changeNumberByOne from '@/services/pomodoro/settings/changeNumberByOne'
import changeNumber from '@/services/pomodoro/settings/changeNumber'
import saveNewSettings from '@/services/pomodoro/settings/saveNewSettings'

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
      <div className="flex justify-around py-2">
        <button>Timer</button>
        <button>Sound</button>
        <button>Theme 3</button>
      </div>

      <div>
        {/* Timers */}
        <form onSubmit={e => handleSaveNewSettings(e)}>
          <table className="">
            <tr>
              <td>
                <span className="pr-3">pomodoro</span>
              </td>
              <td>
                <button type="button" onClick={handlePlus}>-</button>
                <input name="pomo" className="bg-transparent text-center mx-1 w-10 border border-white rounded-md" onChange={e => handleNumberChange(e)} value={pomotime} />
                <button type="button" onClick={handlePlus}>+</button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="pr-3">short break</span>
              </td>
              <td>
                <button type="button" onClick={handlePlus}>-</button>
                <input name="short" className="bg-transparent  text-center mx-1 w-10 border border-white rounded-md" onChange={e => handleNumberChange(e)} value={shorttime}/>
                <button type="button" onClick={handlePlus}>+</button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="pr-3">long break</span>
              </td>
              <td>
                <button type="button" onClick={handlePlus}>-</button>
                <input name="long" className="bg-transparent  text-center mx-1 w-10 border border-white rounded-md" onChange={e => handleNumberChange(e)} value={longtime}/>
                <button type="button" onClick={handlePlus}>+</button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="pr-3">pomodoros per set</span>
              </td>
              <td>
                <button type="button" onClick={handlePlus}>-</button>
                <input name="pomodorosPerSet" className="bg-transparent  text-center mx-1 w-10 border border-white rounded-md" onChange={e => handleNumberChange(e)} value={pomodorosPerSet}/>
                <button type="button" onClick={handlePlus}>+</button>
              </td>
            </tr>
            <tr>
              <td>
                <span>Automatic progression</span>
              </td>
              <td>
                <label htmlFor="auto" className="sr-only">sdad</label>
                <Switch id="auto" name="auto" checked={autoProgression} onClick={() => setAutoprogression(!autoProgression)} />
              </td>
            </tr>
            {/* <li><span className="pr-3">long break</span><input className="bg-transparent  text-center mx-1 w-10 border border-white rounded-md" value={Math.floor(config.time.long/60)}/></li> */}
          </table>
          <button type="submit" className="absolute right-4 bottom-2">SAVE</button>
        </form>

      </div>
      <button className="absolute right-4 top-2" onClick={() => setShowSettings(false) }>X</button>
    </section>
  )
}

export default PomodoroSettings