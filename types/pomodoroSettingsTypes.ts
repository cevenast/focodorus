import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from "react"
import { PomodoroStatusInterface } from "./pomodoroTypes"

export interface changeNumberInterface {
  e: React.MouseEvent | React.ChangeEvent
  setPomotime: Function
  setShorttime: Function
  setLongtime: Function
  setPomodorosPerSet: Function
}

export interface OptionRowInterface {
  type: 'number' | 'switch'
  name: string,
  hasAddButton?: boolean
  handlePlus?: MouseEventHandler
  currentValue?: string | number
  handleNumberChange?: ChangeEventHandler
  id?:string
  checked?:boolean
  switch?:boolean
  isChecked?: boolean
  setIsChecked?: Function
}

export interface saveNewSettingsInterface {
  e:React.FormEvent
  setConfig: Function
  setTimeLeft: Function
  pomodoroStatus: PomodoroStatusInterface
}

export interface TimerOptionsInterface {
  handleSaveNewSettings: FormEventHandler
  handlePlus: MouseEventHandler
  autoProgression: boolean
  setAutoprogression: Function
  handleNumberChange: ChangeEventHandler
  pomotime: string
  shorttime: string
  longtime: string
  pomodorosPerSet: number
}