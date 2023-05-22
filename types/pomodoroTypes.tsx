import React, { MouseEventHandler, ReactNode, RefObject } from "react"

type PomodoroStatusInterface = 'pomo' | 'short' | 'long'

export interface ButtonsInterface {
  isTimerOn: boolean
  resetPomodoro: MouseEventHandler
  setShowSettings: Function
}

export interface changeStatusInterface {
  e: React.MouseEvent
  isTimerOn: boolean
  setIsTimerOn: Function
  pomodoroStatus: PomodoroStatusInterface
  setPomodoroStatus: Function
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
  pomodoroStatus: PomodoroStatusInterface
  setPomodoroStatus: Function
  completedPoms: boolean[]
  setCompletedPoms: Function
  setIsTimerOn: Function
  setTimeLeft: Function
}

export interface handleTimeInterface extends handleCompleteTimerInterface {
  isTimerOn: boolean
  timeLeft: number
}

export interface handleShowSettingsInterface {
  setShowSettings: Function
  e: React.MouseEvent
}

export interface manageStatusChangeInterface {
  pomodoroStatus:PomodoroStatusInterface
  setTimeLeft: Function
  config: ConfigInterface
}

export interface manageBgAudioInterface {
  bgSound: RefObject<HTMLAudioElement>
  config: ConfigInterface
  isTimerOn: boolean
}

export interface PomodoroSettingsInterface {
  config: ConfigInterface
  setConfig: Function
  setShowSettings: Function
  setTimeLeft: Function
  pomodoroStatus: PomodoroStatusInterface
}

export interface PomoStatusInterface {
  isTimerOn: boolean
  setIsTimerOn: Function
  completedPoms: boolean[]
  pomodoroStatus: PomodoroStatusInterface
  timeLeft: number
  resetPomodoro: MouseEventHandler
  handleStatusClick: MouseEventHandler
  config: ConfigInterface;
  setConfig: Function
  setShowSettings: Function
}

export interface ResetPomodoroInterface {
  e?: React.MouseEvent
  pomodoroStatus: 'pomo' | 'short' | 'long'
  setTimeLeft: Function
  setIsTimerOn: Function
  config: ConfigInterface
}

export interface SingleButtonInterface { 
  children: ReactNode
  onClick?: MouseEventHandler
}

export type StatusListInterface = Omit<StatusListItemInterface, "name">

export interface StatusListItemInterface {
  pomodoroStatus: PomodoroStatusInterface
  handleStatusClick: MouseEventHandler
  name: PomodoroStatusInterface
}