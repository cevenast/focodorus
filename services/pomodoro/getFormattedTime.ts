const getFormattedTime = (timeLeft:number) => { 
  return {
    minutes: Math.floor(timeLeft/60), 
    seconds: Math.floor(timeLeft%60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) 
  } 
}

export default getFormattedTime
