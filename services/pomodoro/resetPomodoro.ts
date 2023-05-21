import { ResetPomodoroInterface } from "@/types/pomodoroTypes"

const resetPomodoro = ({ e, pomodoroStatus, setTimeLeft, setIsTimerOn, config }:ResetPomodoroInterface) => {
  if (e){
    e.stopPropagation()
  }
  setTimeLeft(config.time[pomodoroStatus])
  setIsTimerOn(false)
}

export default resetPomodoro