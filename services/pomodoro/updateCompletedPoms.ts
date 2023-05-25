import { updateCompletedPomsInterface } from "@/types/pomodoroTypes"

const updateCompletedPoms = ({ config, completedPoms, setCompletedPoms }:updateCompletedPomsInterface) => {
  if (config.pomodorosPerSet <= completedPoms.length) {
    setCompletedPoms(completedPoms.slice(0,config.pomodorosPerSet))
  }
  else {
    const followingPomos = Array(config.pomodorosPerSet-completedPoms.length).fill(false)
    setCompletedPoms(completedPoms.concat(followingPomos))
  }
}

export default updateCompletedPoms