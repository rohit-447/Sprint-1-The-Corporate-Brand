import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function getInitialTheme() {
  const saved = localStorage.getItem('prodesk-theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.body.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('prodesk-theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f1e9] text-[#1c2730] transition-colors duration-200 dark:bg-[#121a21] dark:text-[#f3f5f6]">
      <Navbar theme={theme} onThemeToggle={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
