import { MouseEventHandler, ReactNode } from "react"

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
  pomodoroStatus:'pomo' | 'short' | 'long'
  setPomodoroStatus: Function
  completedPoms: boolean[]
  setCompletedPoms: Function
  setIsTimerOn: Function
  setTimeLeft: Function
}

export interface PomoStatusInterface {
  isTimerOn: boolean
  setIsTimerOn: Function
  completedPoms: boolean[]
  pomodoroStatus: 'pomo' | 'short' | 'long'
  timeLeft: number
  resetPomodoro: MouseEventHandler
  handleStatusClick: MouseEventHandler
  config:ConfigInterface;
}

export interface SingleButtonInterface { 
  children: ReactNode
  onClick?: MouseEventHandler
}