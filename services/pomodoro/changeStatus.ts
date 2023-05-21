import { changeStatusInterface } from "@/types/pomodoroTypes"

const changeStatus = ({e, isTimerOn, setIsTimerOn, pomodoroStatus, setPomodoroStatus}:changeStatusInterface) => {
  e.stopPropagation()
    setIsTimerOn(false)
    const newStatus = e.target as HTMLElement
    if (pomodoroStatus === 'pomo' && isTimerOn == true){
      alert('stop current pomodoro?')
    }
    if (e.target as HTMLLIElement) {
      setPomodoroStatus(newStatus.id as 'pomo'| 'short'| 'long')
    }
}

export default changeStatus