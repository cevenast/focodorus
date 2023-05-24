import { useState } from 'react'
import { PomodoroSettingsInterface, ConfigInterface } from "@/types/pomodoroTypes"
import Switch from '@mui/material/Switch'


const PomodoroSettings = ({ config, setConfig, setShowSettings, setTimeLeft, pomodoroStatus }:PomodoroSettingsInterface) => {
  const [pomotime, setPomotime] = useState(String(Math.floor(config.time.pomo/60)))
  const [shorttime, setShorttime] = useState(String(Math.floor(config.time.short/60)))
  const [longtime, setLongtime] = useState(String(Math.floor(config.time.long/60)))
  const [pomodorosPerSet, setPomodorosPerSet] = useState(config.pomodorosPerSet)
  const [autoProgression, setAutoprogression] = useState(config.autoProgression)

  const handlePlus = (e:React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement
    const input = (target.parentElement as HTMLElement).childNodes[1] as HTMLInputElement
    const newNum = target.innerText === '+' ? Number(input.value) + 1 : Number(input.value) - 1

    if (input.name == 'pomodorosPerSet' && newNum >= 10) {
      return
    }

    if (newNum < 1000){
      input.value = newNum >= 0 ? String(newNum) : input.value
      switch (input.name) {
        case 'pomo':
          setPomotime(String(newNum))
          break
        case 'short':
          setShorttime(String(newNum))
          break
        case 'long':
          setLongtime(String(newNum))
          break
        case 'pomodorosPerSet':
          setPomodorosPerSet(newNum)
          break
      }
    }
  }

  const handleNumberChange = (e:React.ChangeEvent) => {
    const input = e.target as HTMLInputElement
    const inputValue = input.value

    if (inputValue.split('').some( (char:string) => isNaN(Number(char)) ) || Number(inputValue) > 999){
      return
    }

    if (input.name == 'pomodorosPerSet' && (Number(inputValue) > 9)){
      return
    }

    if (input.name == 'pomo') setPomotime(inputValue)
    else if (input.name =='short') setShorttime(inputValue)
    else if (input.name == 'long') setLongtime(inputValue)
    else if (input.name == 'pomodorosPerSet') setPomodorosPerSet(Number(inputValue))
  }

  const saveNewSettings = (e:React.FormEvent) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const newConfig:ConfigInterface = {
      time: {
        pomo:target.pomo.value*60,
        short:target.short.value*60,
        long:target.long.value*60
      },
      autoProgression:target.auto.checked,
      pomodorosPerSet: Number(target.pomodorosPerSet.value),
      sounds: {
        playAlertSound: true,
        playBackgroundSound: true,
        endPomodoroSound:'some sound',
        endBreakSound:'end break sound',
        ambientSound:'tic tac',
        volume:50
      },
      theme: 'theme1'
    }
    setConfig(newConfig)
    setTimeLeft(newConfig.time[pomodoroStatus])
  }

  // const handlePlus = (e: React.MouseEvent | React.ChangeEvent) => {
  //   // Ensures all characters in input are numbers, 
  //   const input = e.target.parentElement.childNodes[1].value
  //   if (input.split('').some( (char:string) => isNaN(Number(char)) ) ){
  //     return
  //   }

  //   // Defines what happens to previous number on + or - click, or just leaves the typed character onChange
  //   const num = Number(input)*60
  //   let newNum:number
  //   switch (e.currentTarget.innerText) {
  //     case '+':
  //       newNum = num + 60
  //       break
  //     case '-':
  //       newNum = num - 60
  //       break
  //     default:
  //       newNum = num
  //   }

  //   // Prevents negative numbers
  //   if (newNum < 0) newNum = 0

  //   // Updates the config with the new time setting
  //   const newConfig = {...config}
  //   newConfig.time.pomo = newNum
  //   setConfig(newConfig)

  //   // Updates the current pomodoro to full time 
  //   if (timeLeft !== config.time.pomo && newNum > 0){
  //     newNum < 60 ? setTimeLeft(60) : setTimeLeft(newNum)
  //   }
  // }

  return (
    <section className="fixed top-40 right-40 w-96 h-80 bg-neutral-800 text-white rounded-lg p-2 ">
      <div className="flex justify-around py-2">
        <button>Timer</button>
        <button>Sound</button>
        <button>Theme 3</button>
      </div>

      <div>
        {/* Timers */}
        <form onSubmit={e => saveNewSettings(e)}>
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