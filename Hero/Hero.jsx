import "./Hero.css";
const Hero = () => {
  return (
    <div className="container">
      <div className="hero-subtitle-1">
        <p> INDEPENDENT DIGITAL STUDIO</p>
        <p className="line">Est. 2014 / 01</p>
      </div>
      <h3 className="hero-subtitle-2">DIGITAL, WITH DIRECTION</h3>
      <div>
        <h1 children="hero-text">
          We Build digital <span>experiences</span> that moves business forward.
        </h1>
        <p>
          "Prodesk IT turns complex ideas into clear, useful digital systems —
          from the first search to the final click."
        </p>
    
          <button className="btn-1">
            Get started
            <svg
              width="20"
              height="20"
              viewBox="0 0 256 256"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M200,64V168a8,8,0,0,1-16,0V83.314L69.65674,197.65723a8.00018,8.00018,0,0,1-11.31348-11.31446L172.686,72H88a8,8,0,0,1,0-16H192A8.00039,8.00039,0,0,1,200,64Z" />
            </svg>
          </button>
          <button className="btn-2">
            {" "}
            Explore our work{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
      </div>

      <p className="line-full">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4V20M6 14L12 20L18 14"
            stroke="#78A7F5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Scroll our work
      </p>
    </div>
  );
};
export default Hero;
