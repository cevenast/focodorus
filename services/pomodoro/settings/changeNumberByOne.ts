import { changeNumberInterface } from "@/types/pomodoroSettingsTypes"

const changeNumberByOne = ({e, setPomotime, setShorttime, setLongtime, setPomodorosPerSet}:changeNumberInterface) => {
  const target = e.currentTarget as HTMLElement
  const input = (target.parentElement as HTMLElement).childNodes[1] as HTMLInputElement
  const newNum = target.innerText === '+' ? Number(input.value) + 1 : Number(input.value) - 1

  if (input.name == 'pomodorosPerSet' && newNum >= 10 ) {
    return
  }

  if (newNum < 1000 && newNum > 0){
    // input.value = newNum >= 0 ? String(newNum) : input.value
    switch (input.name) {
      case 'pomo':
        setPomotime(String(newNum))
        break
      case 'short':
        setShorttime(String(newNum))
        break
      case 'long':
        setLongtime(String(newNum))
        break
      case 'pomodorosPerSet':
        setPomodorosPerSet(newNum)
        break
    }
  }
}

export default changeNumberByOne