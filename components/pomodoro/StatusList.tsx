import StatusListItem from "./StatusListItem"
import { StatusListInterface } from "@/types/pomodoroTypes"


const StatusList = ({ pomodoroStatus, handleStatusClick }: StatusListInterface) => {
  return (
    <ul className="flex justify-center">
      <StatusListItem pomodoroStatus={pomodoroStatus} handleStatusClick={handleStatusClick} name={'pomo'}/>
      <StatusListItem pomodoroStatus={pomodoroStatus} handleStatusClick={handleStatusClick} name={'short'}/>
      <StatusListItem pomodoroStatus={pomodoroStatus} handleStatusClick={handleStatusClick} name={'long'}/>
    </ul>
  )
}

export default StatusList