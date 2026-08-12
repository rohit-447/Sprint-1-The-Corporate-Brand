import { FiArrowUpRight } from 'react-icons/fi'

function Contact() {
  return (
    <section id="contact" className="bg-[#1f56a8] text-white">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_340px] lg:px-10 lg:py-28">
        <div>
          <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-white/75">HAVE A CHALLENGE? / 04</p>
          <h2 className="mt-5 max-w-[620px] text-[clamp(50px,6.5vw,78px)] font-semibold leading-[0.9] tracking-[-0.065em]">Let’s make the next move.</h2>
        </div>
        <div className="self-end lg:pb-1">
          <p className="max-w-[260px] text-[14px] leading-6 text-white/75">Tell us where you want to go. We’ll help map the route.</p>
          <a href="mailto:hello@prodesk.it" className="group mt-7 inline-flex min-h-11 items-center gap-8 bg-white px-5 text-[13px] font-semibold text-[#1f56a8] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(0,0,0,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f56a8]">Start a conversation <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={17} /></a>
        </div>
      </div>
    </section>
  )
}

export default Contact
