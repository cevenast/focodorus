import { StatusListItemInterface } from "@/types/pomodoroTypes"

const StatusListItem = ({ pomodoroStatus, handleStatusClick, name }: StatusListItemInterface) => {
  const names = {pomo:'Pomodoro', short:'Short Break', long:'Long Break'}

  return (
      <li id={name} className={`${pomodoroStatus === name ? 'bg-white text-black' : 'text-white'} text-center text-sm mx-0.5 rounded-xl transition duration-500`} onClick={handleStatusClick}>{names[name]}</li>
  )
}

export default StatusListItem