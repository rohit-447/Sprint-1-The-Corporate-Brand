import { FiArrowDown, FiArrowUpRight, FiPlus } from 'react-icons/fi'

function Hero() {
  const scrollToServices = () => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-[760px] border-b border-[#d2cec5] pt-[70px] dark:border-white/10 lg:min-h-[785px]">
      <div className="mx-auto grid min-h-[690px] max-w-[1240px] grid-cols-1 gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[155px_minmax(0,1fr)_220px] lg:gap-8 lg:px-10 lg:py-[104px]">
        <aside className="hidden lg:block">
          <p className="font-mono text-[10px] leading-4 tracking-[0.16em] text-[#355a80] dark:text-[#8fb3d7]">INDEPENDENT DIGITAL<br />STUDIO</p>
          <div className="my-5 h-[83px] w-px bg-[#1f56a8]" />
          <p className="font-mono text-[10px] font-semibold tracking-[0.14em] text-[#1d2a34] dark:text-[#c7d0d6]">EST. 2014 / 01</p>
        </aside>

        <div className="max-w-[770px] self-center">
          <div className="mb-5 flex items-center gap-2 font-mono text-[10px] font-semibold tracking-[0.16em] text-[#1f56a8] sm:text-[11px]">
            DIGITAL, WITH DIRECTION <span className="h-1.5 w-1.5 rounded-full bg-[#e14b3e]" aria-hidden="true" />
          </div>
          <div className="mb-8 flex items-center gap-5 font-mono text-[9px] tracking-[0.14em] text-[#355a80] lg:hidden">
            <span>INDEPENDENT DIGITAL STUDIO</span><span className="h-px w-7 bg-[#1f56a8]" /><span>EST. 2014 / 01</span>
          </div>
          <h1 className="max-w-[780px] text-[clamp(52px,7.4vw,82px)] font-semibold leading-[0.91] tracking-[-0.065em] text-[#1c2730] dark:text-[#f3f5f6]">
            We build digital <span className="text-[#1f56a8]">experiences</span> that move business forward.
          </h1>
          <p className="mt-9 max-w-[620px] text-[15px] leading-7 text-[#61707b] dark:text-[#aeb8bf] sm:text-[16px]">
            Prodesk IT turns complex ideas into clear, useful digital systems — from the first search to the final click.
          </p>
          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="group inline-flex min-h-11 items-center gap-6 bg-[#1f56a8] px-5 text-[13px] font-semibold text-white shadow-[0_7px_18px_rgba(31,86,168,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.015] hover:bg-[#194a95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f56a8] focus-visible:ring-offset-2 dark:ring-offset-[#121a21]">
              Get started <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={17} aria-hidden="true" />
            </button>
            <button onClick={scrollToServices} className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#64727d] transition-colors hover:text-[#1f56a8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f56a8] dark:text-[#aeb8bf]">
              Explore our work <FiArrowDown className="transition-transform group-hover:translate-y-1" size={15} aria-hidden="true" />
            </button>
          </div>
        </div>

        <aside className="hidden self-center lg:block">
          <div className="relative mx-auto h-[155px] w-[155px] border border-[#c8c5bd] dark:border-white/15">
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#1f56a8]" />
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#1f56a8]" />
            <span className="absolute -left-1 -top-1 h-2 w-2 border border-[#1f56a8] bg-[#f5f1e9] dark:bg-[#121a21]" />
            <span className="absolute -right-1 -top-1 h-2 w-2 border border-[#1f56a8] bg-[#f5f1e9] dark:bg-[#121a21]" />
            <span className="absolute -bottom-1 -left-1 h-2 w-2 border border-[#1f56a8] bg-[#f5f1e9] dark:bg-[#121a21]" />
            <span className="absolute -bottom-1 -right-1 h-2 w-2 border border-[#1f56a8] bg-[#f5f1e9] dark:bg-[#121a21]" />
          </div>
          <div className="mt-5 font-mono text-[9px] tracking-[0.12em] text-[#526474] dark:text-[#9aabb7]">SYSTEM / 001</div>
          <div className="mt-2 text-[10px] text-[#65737d] dark:text-[#9aabb7]">Strategy → Design → Growth</div>
        </aside>
      </div>

      <div className="mx-auto flex max-w-[1240px] items-center gap-4 px-5 pb-7 sm:px-8 lg:px-10">
        <button onClick={scrollToServices} className="flex shrink-0 items-center gap-2 text-[11px] text-[#6b7881] hover:text-[#1f56a8] dark:text-[#aeb8bf]" aria-label="Scroll to services"><FiArrowDown className="text-[#1f56a8]" size={15} />Scroll to explore</button>
        <div className="h-px flex-1 bg-[#cbc7bf] dark:bg-white/10" />
        <span className="hidden font-mono text-[9px] tracking-[0.15em] text-[#355a80] sm:block">A CONSIDERED APPROACH TO DIGITAL</span>
        <FiPlus className="text-[#1f56a8] sm:hidden" size={13} aria-hidden="true" />
      </div>
    </section>
  )
}

export default Hero
