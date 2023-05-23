import { ConfigInterface } from "@/types/pomodoroTypes"

const config: ConfigInterface = {
  time: {
    pomo:1500,
    short:300,
    long:1200
  },
  autoProgression: true,
  pomodorosPerSet: 6,
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

export default config