import { PomodoroStatusInterface } from "./pomodoroTypes"

export interface changeNumberInterface {
  e: React.MouseEvent | React.ChangeEvent
  setPomotime: Function
  setShorttime: Function
  setLongtime: Function
  setPomodorosPerSet: Function
}

export interface saveNewSettingsInterface {
  e:React.FormEvent
  setConfig: Function
  setTimeLeft: Function
  pomodoroStatus: PomodoroStatusInterface
}