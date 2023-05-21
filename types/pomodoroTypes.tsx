import { MouseEventHandler, ReactNode, RefObject } from "react"

type PomodoroStatus = 'pomo' | 'short' | 'long'

export interface ButtonsInterface {
  isTimerOn: boolean
  resetPomodoro: MouseEventHandler
}

export interface ConfigInterface {
  time: {'pomo': number, 'short': number, 'long': number }
  pomodorosPerSet: number
  sounds: {
    'playAlertSound': boolean,
    'playBackgroundSound': boolean,
    'endPomodoroSound': string,
    'endBreakSound':string,
    'ambientSound':string,
    'volume':number}
  theme: string
}

export interface handleCompleteTimerInterface {
  pomodoroStatus: PomodoroStatus
  setPomodoroStatus: Function
  completedPoms: boolean[]
  setCompletedPoms: Function
  setIsTimerOn: Function
  setTimeLeft: Function
}

export interface manageStatusChangeInterface {
  pomodoroStatus:PomodoroStatus
  setTimeLeft: Function
  config: ConfigInterface
}

export interface manageBgAudioInterface {
  bgSound: RefObject<HTMLAudioElement>
  config: ConfigInterface
  isTimerOn: boolean
}

export interface PomoStatusInterface {
  isTimerOn: boolean
  setIsTimerOn: Function
  completedPoms: boolean[]
  pomodoroStatus: PomodoroStatus
  timeLeft: number
  resetPomodoro: MouseEventHandler
  handleStatusClick: MouseEventHandler
  config:ConfigInterface;
}

export interface SingleButtonInterface { 
  children: ReactNode
  onClick?: MouseEventHandler
}

export type StatusListInterface = Omit<StatusListItemInterface, "name">

export interface StatusListItemInterface {
  pomodoroStatus: PomodoroStatus
  handleStatusClick: MouseEventHandler
  name: PomodoroStatus
}