import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Grain from './components/Grain'
import GridBackground from './components/GridBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <GridBackground />
      <Cursor />
      <Grain />
      {loading ? (
        <Loader />
      ) : (
        <main className="main-content">
          <Navbar />
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  )
}

export default App
