import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustIndicators from './components/TrustIndicators'
import About from './components/About'
import Services from './components/Services'
import ChartSection from './components/ChartSection'
import Partners from './components/Partners'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.section-reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <Hero />
      <TrustIndicators />
      <About />
      <Services />
      <ChartSection />
      <Partners />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
