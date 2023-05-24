import { manageBgAudioInterface } from "@/types/pomodoroTypes"

const manageBgAudio = ({bgSound, config, isTimerOn, pomodoroStatus}:manageBgAudioInterface) => {
  if (bgSound.current){
    if (config.sounds.playBackgroundSound){
      bgSound.current.loop= true
      isTimerOn && pomodoroStatus === 'pomo' ? bgSound.current.play() : bgSound.current.pause()
    }
    else{
      bgSound.current.pause()
    }
  }
}

export default manageBgAudio