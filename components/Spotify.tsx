import { useState, useEffect } from "react"
import SearchMenu from "./spotifySearch/SearchMenu"
import checkToken from "./checkToken"

const Spotify = () => {
  const [token, setToken] = useState('')
  const [player, setPlayer] = useState({type:'playlist',id:'37i9dQZF1DWW06b4n9Ho9J'})
  const [searchMenuVisible, setSearchMenuVisible] = useState(false)

  useEffect(() => {
    const fetchData = async() => await checkToken(setToken)
    fetchData()
  }, [])

  return(
    <div className="relative">
      <button className={`${searchMenuVisible && 'hidden'} absolute right-5 top-4 h-10 w-10 bg-neutral-800 rounded-full text-white`} onClick={() => setSearchMenuVisible(true)}>O  </button>
      <iframe src={`https://open.spotify.com/embed/${player.type}/${player.id}`} allow-transparecy="true" allow="encrypted-media" width="380" height="550"></iframe>
      <SearchMenu token={token} searchMenuVisible={searchMenuVisible} setSearchMenuVisible={setSearchMenuVisible} setPlayer={setPlayer}/>
    </div>
  )
}

export default Spotify