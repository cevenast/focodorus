import { StatusListItemInterface } from "@/types/pomodoroTypes"

const StatusListItem = ({ pomodoroStatus, handleStatusClick, name }: StatusListItemInterface) => {
  const names = {pomo:'pomodoro', short:'short break', long:'long break'}

  return (
      <li 
        id={name} 
         
        onClick={handleStatusClick}
      >
        <button
          className={`${pomodoroStatus === name ? 'bg-white text-black' : 'text-white hover:bg-pomo-2'} text-center text-xs mx-1 px-1.5 py-0.5 mb-1 rounded-xl transition duration-500`}>{names[name]}</button>
      </li>
  )
}

export default StatusListItem