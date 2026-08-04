import { Countdown } from '@/components/wedding/countdown'
import { Footer } from '@/components/wedding/footer'
import { Hero } from '@/components/wedding/hero'
import { Loader } from '@/components/wedding/loader'
import { Location } from '@/components/wedding/location'
import { Navbar } from '@/components/wedding/navbar'
import { Program } from '@/components/wedding/program'
import { Story } from '@/components/wedding/story'
import { ThankYou } from '@/components/wedding/thank-you'

export default function Page() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <Story />
        <Program />
        <Location />
        <ThankYou />
      </main>
      <Footer />
    </>
  )
}
