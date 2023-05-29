import { TimerOptionsInterface } from '@/types/pomodoroSettingsTypes'
import OptionRow from './OptionRow'

const SoundOptions = ({ activeCategory, soundOn, setSoundOn }) => {
  return (

    <table className={`w-full ${activeCategory !== 'sound' ? 'hidden' : ''}`}>
      <OptionRow type='switch' name='sound on' id='soundon' isChecked={soundOn} setIsChecked={setSoundOn} />
    </table>

  )
}

export default SoundOptions