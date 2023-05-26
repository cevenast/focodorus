import { changeNumberInterface } from "@/types/pomodoroSettingsTypes"

const changeNumber = ({ e, setPomotime, setShorttime, setLongtime, setPomodorosPerSet }:changeNumberInterface) => {
  const input = e.target as HTMLInputElement
  const inputValue = input.value

  if (inputValue.split('').some( (char:string) => isNaN(Number(char)) ) || Number(inputValue) > 999){
    return
  }

  if (input.name == 'pomodorosPerSet' && (Number(inputValue) > 9)){
    return
  }

  if (input.name == 'pomo') setPomotime(inputValue)
  else if (input.name =='short') setShorttime(inputValue)
  else if (input.name == 'long') setLongtime(inputValue)
  else if (input.name == 'pomodorosPerSet') setPomodorosPerSet(Number(inputValue))
}

export default changeNumber