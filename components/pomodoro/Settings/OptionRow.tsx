import Switch from '@mui/material/Switch'
import { OptionRowInterface } from '@/types/pomodoroSettingsTypes'


const OptionRow = ({type, name, id, hasAddButton=false, handlePlus, currentValue, handleNumberChange, isChecked, setIsChecked}:OptionRowInterface) => {
  let data
  
  if (type === 'number' && handleNumberChange) {
    data = 
      <>
        {hasAddButton && <button type="button" onClick={handlePlus}>-</button>}
        <input name={id} className="bg-transparent text-center mx-1 w-10 border border-white rounded-md" onChange={e => handleNumberChange(e)} value={currentValue} />
        {hasAddButton && <button type="button" onClick={handlePlus}>+</button>}
      </>
  }
  else if (type === 'switch' && setIsChecked) {
    data =
    <>
      <label htmlFor={id} className="sr-only">Toggle Pomodoro Auto Progression</label>
      <Switch id={id} name={id} checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
    </>
  }
  
  return (
    <tr>
      <td>
        <span className="pr-3">{name}</span>
      </td>
      <td>
        {data}
      </td>
    </tr>
  )
}

export default OptionRow