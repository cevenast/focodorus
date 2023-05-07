import { FormEvent } from "react"
import checkToken from "../checkToken"
import getNewToken from "../getToken"
// sets results state in the following shape:
// results = {
//   albums: [{},{},{}...]
//   artists: [{},{},{}...],
//   tracks:[{},{},{}...],
//   playslists:[{},{},{}...]
// }

const spotifyRequest = async (e:FormEvent, searchInput:string, activeCategory:string, results:results, setResults:Function) => {
  e.preventDefault()
  if (searchInput == '') return

  let token = await checkToken()
  if (!token){
    console.log('token expired, fetching new token...')
    token = await getNewToken()
  }

  const res = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=${activeCategory}&market=ES&limit=15`, {
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  const data = await res.json()
  const type = Object.keys(data)[0]
  const info = data.artists || data.albums || data.playlists || data.tracks

  const newResults = (() => { // IIFE
    switch(type){
      case 'tracks':
        return {...results, tracks:info.items}
      case 'albums':
        return {...results, albums:info.items}
      case 'artists':
        return {...results, artists:info.items}
      case 'playlists':
        return {...results, playlists:info.items}  
    }
  })()
  setResults(newResults) 
}

export default spotifyRequest

type results = {albums:Array<any>, artists:Array<any>, track:Array<any>, playlists:Array<any>}