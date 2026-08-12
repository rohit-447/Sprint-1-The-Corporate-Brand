function About() {
  return (
    <section id="about" className="border-b border-[#d2cec5] py-24 dark:border-white/10 sm:py-28 lg:py-36">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <div>
          <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-[#355a80] dark:text-[#8fb3d7]">A LITTLE ABOUT US / 03</p>
          <h2 className="mt-6 max-w-[600px] text-[clamp(45px,5.5vw,67px)] font-semibold leading-[0.91] tracking-[-0.065em] text-[#1c2730] dark:text-[#f3f5f6]">Small enough to care. <span className="text-[#1f56a8]">Sharp enough to deliver.</span></h2>
        </div>
        <div className="self-end">
          <h3 className="max-w-[470px] text-[22px] font-medium leading-[1.25] tracking-[-0.03em] text-[#1d2a34] dark:text-white sm:text-[24px]">We are a digital marketing wing for ambitious businesses that value momentum over theatre.</h3>
          <p className="mt-7 max-w-[510px] text-[14px] leading-7 text-[#61707b] dark:text-[#aeb8bf]">Our team brings strategy, design, development, and growth into one room. That means fewer handoffs, better decisions, and digital work that earns its place.</p>
          <div className="mt-10 grid grid-cols-3 border-t border-[#c8c5bd] pt-6 dark:border-white/10">
            <div><strong className="text-[27px] font-medium tracking-[-0.05em] text-[#1f56a8]">10+</strong><p className="mt-1 max-w-[90px] text-[10px] leading-4 text-[#687680] dark:text-[#aeb8bf]">years making digital useful</p></div>
            <div><strong className="text-[27px] font-medium tracking-[-0.05em] text-[#1f56a8]">24</strong><p className="mt-1 max-w-[90px] text-[10px] leading-4 text-[#687680] dark:text-[#aeb8bf]">markets reached with our work</p></div>
            <div><strong className="text-[27px] font-medium tracking-[-0.05em] text-[#1f56a8]">01</strong><p className="mt-1 max-w-[90px] text-[10px] leading-4 text-[#687680] dark:text-[#aeb8bf]">focused team for your next move</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
