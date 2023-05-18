interface handleCompleteTimerInterface {
  pomodoroStatus:'pomo' | 'short' | 'long'
  setPomodoroStatus: Function
  completedPoms: boolean[]
  setCompletedPoms: Function
  setIsTimerOn: Function
  setTimeLeft: Function
}

const handleCompleteTimer = ({pomodoroStatus, setPomodoroStatus, completedPoms, setCompletedPoms, setIsTimerOn, setTimeLeft}:handleCompleteTimerInterface) => {
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
    setCompletedPoms([false,false,false,false])
    setTimeLeft(123)
    setPomodoroStatus('pomo')
  }
}

export default handleCompleteTimer