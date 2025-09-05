import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import Message from './pages/Message'
import Products from './pages/Products'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const App = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    })
  },)
  
  return (
    <div>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Message />
          <Products />
          <div className="h-400 w-full border-t-10 border-red-500"></div>
        </div>
      </div>
    </div>
  );
}

export default App