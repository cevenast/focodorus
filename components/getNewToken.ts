const getNewToken = async () => {
  try{
    console.log('fetching a new token from the new getToken')
    const res = await fetch('/api/spotify/getSpotifyToken')
    const data = await res.json()
  
    window.localStorage.setItem('token', data)
    window.localStorage.setItem('expiration_date', new Date(Date.now() + 3590000).toString() )

    return data
  }
  catch(err) {
    let errorMessage = "Something went wrong: "
    if (err instanceof Error){
      errorMessage += err.message
    }
    console.log(errorMessage)
  }
}

export default getNewToken