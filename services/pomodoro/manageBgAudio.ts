import { manageBgAudioInterface } from "@/types/pomodoroTypes"

const manageBgAudio = ({bgSound, config, isTimerOn}:manageBgAudioInterface) => {
  if (bgSound.current){
    if (config.sounds.playBackgroundSound){
      bgSound.current.loop= true
      isTimerOn ? bgSound.current.play() : bgSound.current.pause()
    }
    else{
      bgSound.current.pause()
    }
  }
}

export default manageBgAudio