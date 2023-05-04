const checkToken = (setToken:Function) => {
  // Checks if there's a token in localStorage.
  // Checks if the token expired comparing its date with the actual date
  const storedToken = window.localStorage.getItem('token')
  const storedExpirationDate = window.localStorage.getItem('expiration_date')
  
  if (storedToken && storedExpirationDate && Date.parse(storedExpirationDate) > Date.parse(Date()) ){
    console.log('token exists in local storage and expiration date comes after current date')
    // If it's still valid, sets the token state
    setToken(storedToken)
    console.log('token was set in state from checkToken')
    
  }
  else{
    console.log('fetching a new token')
    fetch('/api/spotify/getSpotifyToken')
    .then(res => res.json())
    .then(res => {
      window.localStorage.setItem('token', res)
      window.localStorage.setItem('expiration_date', new Date(Date.now() + 3600000).toString() )
      setToken(res)
      console.log('token was set in state from checkToken fetch')
    })
    .catch(err => console.log(err))
  }
}

export default checkToken