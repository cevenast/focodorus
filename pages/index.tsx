import { Inter } from 'next/font/google'
import Head from 'next/head'
import Column from '../components/Column'
import Spotify from '../components/Spotify'
import Pomodoro from '../components/Pomodoro'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>LA PAGINA</title>
      <meta name='keywords' content='pomodoro, focus, music, notes, organization' />
    </Head>

    <main className={`flex min-h-screen justify-between p-20 ${inter.className}`}>

      <Column> <Spotify/> </Column>      
      <Column> <Pomodoro/></Column>
      <Column>q talca</Column>

    </main>
    </>
  )
}
