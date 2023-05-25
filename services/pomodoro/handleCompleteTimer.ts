import { handleCompleteTimerInterface } from "@/types/pomodoroTypes"

const handleCompleteTimer = ({pomodoroStatus, setPomodoroStatus, completedPoms, setCompletedPoms, setIsTimerOn, setTimeLeft, config}:handleCompleteTimerInterface) => {
  if (config.autoProgression === true) {
    // if what was completed was a pomodoro, add to completedPoms and go to short or long break.
    if (pomodoroStatus === 'pomo') {
      const b = [...completedPoms]
      b.unshift(true)
      b.pop()
      setCompletedPoms(b)
      b.filter(pom => pom === true).length < completedPoms.length ? setPomodoroStatus('short') : setPomodoroStatus('long')
    }
    // If a short break was completed, go to next pomodoro.
    else if (pomodoroStatus === 'short') {
      setPomodoroStatus('pomo')
    }
    else{
      alert('yessss')
      setIsTimerOn(false)
      setCompletedPoms(Array(completedPoms.length).fill(false))
      setTimeLeft(config.time.pomo)
      setPomodoroStatus('pomo')
    }
  }

  else{
    setIsTimerOn(false)
  }
}

export default handleCompleteTimer