import { useState } from 'react'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Column from '../components/Column'
import Spotify from '../components/Spotify'
import Pomodoro from '../components/Pomodoro'
import { FaSpotify } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [spotifyVisibility, setSpotifyVisibility] = useState(false)

  return (
    <>
    <Head>
      <title>LA PAGINA</title>
      <meta name='keywords' content='pomodoro, focus, music, notes, organization' />
    </Head>

    <main className={`flex flex-wrap shrink-0 min-h-screen justify-evenly  py-20 ${inter.className}`}>
      <button onClick={() => setSpotifyVisibility(!spotifyVisibility)} >
        <FaSpotify className="absolute left-5 top-20 md:hidden hover:scale-110 transition ease-linear" size="3em" color="#444444"/>
      </button>
      <Column size="w-[380px]" className={`absolute left-8 top-36 ${spotifyVisibility ? 'visible' : 'collapse'} md:static md:visible`}> <Spotify/> </Column>      
      <Column size="w-[300px]" className=""> <Pomodoro/></Column>
      <Column size="w-[300px]" className="">q talca</Column>

    </main>
    </>
  )
}
