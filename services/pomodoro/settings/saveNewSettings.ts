import { ConfigInterface } from "@/types/pomodoroTypes"
import { saveNewSettingsInterface } from "@/types/pomodoroSettingsTypes"

const saveNewSettings = ({ e, setConfig, setTimeLeft, pomodoroStatus }:saveNewSettingsInterface) => {
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

export default saveNewSettings