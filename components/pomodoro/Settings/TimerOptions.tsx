import { TimerOptionsInterface } from '@/types/pomodoroSettingsTypes'
import OptionRow from './OptionRow'

const TimerOptions = ({ activeCategory, handlePlus, autoProgression, setAutoprogression, handleNumberChange, pomotime, shorttime, longtime, pomodorosPerSet }:TimerOptionsInterface) => {
  return (

          <table className={`w-full ${activeCategory !== 'timer' ? 'hidden' : ''}`}>
            <OptionRow type='number' name='pomodoro' id='pomo' hasAddButton={true} handlePlus={handlePlus} currentValue={pomotime} handleNumberChange={handleNumberChange} />
            <OptionRow type='number' name='short break' id='short' hasAddButton={true} handlePlus={handlePlus} currentValue={shorttime} handleNumberChange={handleNumberChange} />
            <OptionRow type='number' name='long break' id='long' hasAddButton={true} handlePlus={handlePlus} currentValue={longtime} handleNumberChange={handleNumberChange} />
            <OptionRow type='number' name='pomodoros per set' id='pomodorosPerSet' hasAddButton={true} handlePlus={handlePlus} currentValue={pomodorosPerSet} handleNumberChange={handleNumberChange} />
            <OptionRow type='switch' name='automatic progression' id='auto' isChecked={autoProgression} setIsChecked={setAutoprogression} />
          </table>

  )
}

export default TimerOptions