const checkToken = () => {
  // Checks if there's a token in localStorage.
  // Checks if the token expired comparing its date with the actual date

  const storedToken = window.localStorage.getItem('token')
  const storedExpirationDate = window.localStorage.getItem('expiration_date')
  
  if (storedToken && storedExpirationDate && Date.parse(storedExpirationDate) > Date.parse(Date()) ){
    // If it's still valid, returns the token
    return storedToken
  }
  else{
    return false
  }
}

export default checkToken