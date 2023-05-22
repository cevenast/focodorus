import { handleShowSettingsInterface } from "@/types/pomodoroTypes"

export const showSettings = ({ e, setShowSettings }:handleShowSettingsInterface) => {
  e.stopPropagation()
  setShowSettings(true)
}

export const hideSettings = ({ e, setShowSettings }:handleShowSettingsInterface) => {
  e.stopPropagation()
  setShowSettings(false)
}

