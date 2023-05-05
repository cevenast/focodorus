import { useState, useEffect } from "react"
import SearchMenu from "./spotifySearch/SearchMenu"
import checkToken from "./checkToken"
import SearchIcon from '@mui/icons-material/Search'

const Spotify = () => {
  const [token, setToken] = useState('')
  const [player, setPlayer] = useState({type:'playlist',id:'0vvXsWCC9xrXsKd4FyS8kM'})
  const [searchMenuVisible, setSearchMenuVisible] = useState(false)

  useEffect(() => {
    const fetchData = async() => await checkToken(setToken)
    fetchData()
  }, [])

  return(
    <div className="relative">
      <button className={`${searchMenuVisible && 'hidden'} absolute right-7 top-3 h-8 w-8 bg-white rounded-full hover:scale-110 ring-white transition ease-linear`} onClick={() => setSearchMenuVisible(true)}>
        <SearchIcon/>  
      </button>
      <iframe src={`https://open.spotify.com/embed/${player.type}/${player.id}`} allow-transparecy="true" allow="encrypted-media" width="380" height="550"></iframe>
      <SearchMenu token={token} searchMenuVisible={searchMenuVisible} setSearchMenuVisible={setSearchMenuVisible} setPlayer={setPlayer}/>
    </div>
  )
}

export default Spotify