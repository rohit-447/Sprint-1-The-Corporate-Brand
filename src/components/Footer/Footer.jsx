import { FiInstagram, FiLinkedin } from 'react-icons/fi'
import logoImg from '../../assets/logo.png'

function Footer() {
  return (
    <footer className="bg-[#18232d] text-white">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:px-10">
        <div>
          <a href="#home" className="inline-flex items-center gap-2.5" aria-label="Return to Prodesk IT home">
            <img src={logoImg} alt="Prodesk IT" width="28" height="28" className="h-7 w-7 object-contain" />
            <span className="text-[15px] font-semibold">Prodesk<span className="text-[#4e84d0]">.</span>IT</span>
          </a>
          <p className="mt-4 text-[11px] text-[#aab5bd]">Digital work with a point of view.</p>
        </div>
        <div className="flex flex-col justify-between gap-6 lg:items-end">
          <div className="flex gap-2">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-8 w-8 place-items-center border border-[#52616c] text-[#d8dee2] transition-colors hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78a7f5]"><FiLinkedin size={15} /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-8 w-8 place-items-center border border-[#52616c] text-[#d8dee2] transition-colors hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78a7f5]"><FiInstagram size={15} /></a>
          </div>
          <p className="text-[11px] text-[#aab5bd]">© 2026 Prodesk IT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
