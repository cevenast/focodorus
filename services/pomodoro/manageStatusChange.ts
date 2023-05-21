import { manageStatusChangeInterface } from "@/types/pomodoroTypes"

const manageStatusChange = ({pomodoroStatus, setTimeLeft, config}:manageStatusChangeInterface) => {
  if (pomodoroStatus === 'pomo'){
    setTimeLeft(config.time.pomo)
  }
  else if (pomodoroStatus === 'short'){
    setTimeLeft(config.time.short)
  }
  else{
    setTimeLeft(config.time.long)
  }
}

export default manageStatusChange