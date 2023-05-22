import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'
import { VscDebugRestart } from 'react-icons/vsc'
import { RiSettings3Fill } from 'react-icons/ri'
import { ButtonsInterface } from '@/types/pomodoroTypes'
import SingleButton from './SingleButton'
import { showSettings } from '@/services/pomodoro/handleShowSettings'

const Buttons = ({ isTimerOn, resetPomodoro, setShowSettings }:ButtonsInterface) => {
  const iconsSize = '2.5em'

  return (
    <div className="text-center pt-4">
      {/* Play or Pause Indicator */}
      <SingleButton>
        { isTimerOn ? <BsFillPauseFill size={iconsSize}/> : <BsFillPlayFill size={iconsSize} /> }
      </SingleButton>

      {/* Reset Button */}
      <SingleButton  onClick={resetPomodoro}> 
        <VscDebugRestart size={iconsSize} /> 
      </SingleButton>

      {/* Settings Button */}
      <SingleButton onClick={(e) => showSettings({ e, setShowSettings })}>
        <RiSettings3Fill size={iconsSize}/>
      </SingleButton>
    </div>
  )
}

export default Buttons