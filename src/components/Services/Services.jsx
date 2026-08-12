import { FiCode, FiSearch, FiSend, FiArrowUpRight } from 'react-icons/fi'

const services = [
  { number: '01', title: 'Search / SEO', icon: FiSearch, text: 'Be found by the people already looking for what you do.', result: 'Visibility that compounds' },
  { number: '02', title: 'Web Development', icon: FiCode, text: 'Fast, focused digital platforms that turn attention into action.', result: 'Built for the next click' },
  { number: '03', title: 'Marketing', icon: FiSend, text: 'A sharper story, carried consistently across every touchpoint.', result: 'Clarity at every scale' },
]

function Services() {
  return (
    <section id="services" className="border-b border-[#d2cec5] py-24 dark:border-white/10 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_250px] lg:items-end">
          <div>
            <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-[#355a80] dark:text-[#8fb3d7]">WHAT WE DO / 02</p>
            <h2 className="mt-5 max-w-[720px] text-[clamp(42px,5vw,62px)] font-semibold leading-[0.94] tracking-[-0.06em] text-[#1c2730] dark:text-[#f3f5f6]">Good work starts with <span className="text-[#1f56a8]">good questions.</span></h2>
          </div>
          <p className="max-w-[250px] text-[13px] leading-6 text-[#64727d] dark:text-[#aeb8bf]">No noise, no off-the-shelf answers. Just the right combination of thinking and making for the problem in front of you.</p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {services.map(({ number, title, icon: Icon, text, result }) => (
            <article key={number} className="group relative min-h-[310px] border border-[#c8c5bd] bg-[#faf8f3] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#1f56a8] hover:shadow-[0_18px_40px_rgba(27,40,52,0.10)] dark:border-white/10 dark:bg-[#18222b] dark:hover:border-[#4c80c5] dark:hover:shadow-black/30">
              <div className="flex items-center justify-between font-mono text-[10px] font-semibold tracking-[0.1em] text-[#1f56a8]"><span>{number}</span><Icon size={21} strokeWidth={1.6} aria-hidden="true" /></div>
              <div className="mt-16">
                <h3 className="text-[23px] font-semibold tracking-[-0.04em] text-[#1d2a34] dark:text-white">{title}</h3>
                <p className="mt-4 max-w-[290px] text-[13px] leading-6 text-[#65737d] dark:text-[#aeb8bf]">{text}</p>
              </div>
              <div className="absolute bottom-6 left-6 right-6 border-t border-[#c8c5bd] pt-4 dark:border-white/10">
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.08em] text-[#596b78] dark:text-[#aeb8bf]"><span className="text-[#e14b3e]">✓</span>{result}<FiArrowUpRight className="ml-auto opacity-0 transition-opacity group-hover:opacity-100" size={13} /></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
