import { NextApiRequest, NextApiResponse } from "next"

export default function getSpotifyToken(req:NextApiRequest, res:NextApiResponse){
  fetch("https://accounts.spotify.com/api/token",{
    method: 'post',
    headers:{
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
  })
    .then(data => data.json())
    .then(data => {
      console.log(data)
      const spotifyToken:string = data.access_token
      res.status(200).json(spotifyToken)
    })
    .catch(err => console.log(err))
}