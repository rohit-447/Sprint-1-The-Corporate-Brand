import "./Hero.css";
import "../../App.css";
const Hero = () => {
  return (
    <div className="container">
      <div className="subtitle">
        <div className="subtitle-1">
          <h4>INDEPENDENT DIGITAL STUDIO</h4>
          <h4>EST. 2014 /01</h4>
        </div>
        <h4>DIGITAL, WITH DIRECTION</h4>
      </div>
      <h1>
        We Build digital <span>experiences</span> that moves business forward.
      </h1>
      <p className="hero-desc">
        Prodesk IT turns complex ideas into clear, useful digital systems from
        the first search to the final click.
      </p>
      <div className="button-container">
        <button className="btn-1">
          Get started
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 19L19 5M19 5H9M19 5V15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="btn-2">
          Explore our work
          <svg
            width="24"
            height="24"
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
      
      <h4 className="scroll-down"><svg
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
        </svg>Scroll to explore  </h4>
    </div>
  );
};
export default Hero;
