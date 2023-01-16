import { Inter } from '@next/font/google'
import Advertise from '../components/section/Advertise'
import Destination from '../components/section/Destination'
import EmailSubscribe from '../components/section/EmailSubscribe'
import Hero from '../components/section/Hero'
import Hotel from '../components/section/Hotel'
// import Search from '../components/section/Search'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero />
      <Advertise/>
      <Destination/>
      <Hotel/>
      <EmailSubscribe/>
    </>
  )
}
