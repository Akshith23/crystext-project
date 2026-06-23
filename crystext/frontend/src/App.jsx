import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Features from './components/sections/Features'
import HowItWorks from './components/sections/HowItWorks'
import Demo from './components/sections/Demo'
import Statistics from './components/sections/Statistics'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FFF7ED] text-[#5F5147]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Demo />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
