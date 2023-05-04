import { NextApiRequest, NextApiResponse } from "next"

export default function getArtists(req:NextApiRequest, res:NextApiResponse, token:string){
  console.log('Searching...')
  const input = req.query.input
  fetch(`https://api.spotify.com/v1/search?q=${input}&type=artist&market=ES`, {
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(res => {console.log(res)})
    .catch(err => console.log('there was an error'))
}