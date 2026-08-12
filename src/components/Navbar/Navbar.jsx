import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiMoon,
  FiSun,
  FiArrowUpRight,
} from "react-icons/fi";
import logoImg from "../../assets/logo.png";

const navLinks = [
  { name: "Home", target: "#home" },
  { name: "About", target: "#about" },
  { name: "Services", target: "#services" },
  { name: "Contact", target: "#contact" },
];

function Navbar({ theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (target) => {
    setMenuOpen(false);

    document.querySelector(target)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        border-b
        transition-all
        duration-300

        ${
          scrolled
            ? `
              bg-[#f5f1e9]/75
              backdrop-blur-xl
              border-[#c8c5bd]/60
              shadow-[0_8px_30px_rgba(28,39,48,0.08)]

              dark:bg-[#121a21]/75
              dark:border-white/10
              dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)]
            `
            : `
              bg-[#f5f1e9]/90
              backdrop-blur-md
              border-[#d2cec5]

              dark:bg-[#121a21]/90
              dark:border-white/10
            `
        }
      `}
    >
      <nav
        className="
          mx-auto
          flex
          h-[70px]
          max-w-[1240px]
          items-center
          justify-between
          px-5
          sm:px-8
          lg:px-10
        "
        aria-label="Primary navigation"
      >
        {/* ================= LOGO ================= */}

        <button
          onClick={() => scrollToSection("#home")}
          className="
            flex
            items-center
            gap-2.5
            rounded-md
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#1f56a8]
          "
          aria-label="Go to homepage"
        >
          <img
            src={logoImg}
            alt="Prodesk IT"
            width="28"
            height="28"
            className="h-7 w-7 object-contain"
          />

          <span
            className="
              text-[15px]
              font-semibold
              tracking-[-0.03em]
              text-[#1c2730]
              dark:text-white
            "
          >
            Prodesk
            <span className="text-[#1f56a8]">.</span>
            IT
          </span>
        </button>

        {/* ================= DESKTOP NAV ================= */}

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.target)}
              className="
                relative
                text-[13px]
                text-[#5c6871]
                transition-colors
                duration-200
                hover:text-[#1f56a8]

                after:absolute
                after:-bottom-2
                after:left-0
                after:h-px
                after:w-0
                after:bg-[#1f56a8]
                after:transition-all
                after:duration-200
                hover:after:w-full

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#1f56a8]

                dark:text-[#aeb8bf]
                dark:hover:text-white
              "
            >
              {link.name}
            </button>
          ))}

          {/* Theme button */}

          <button
            onClick={onThemeToggle}
            className="
              flex
              items-center
              gap-2
              rounded-md
              px-2
              py-1
              text-[13px]
              text-[#5c6871]
              transition-colors
              hover:text-[#1f56a8]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#1f56a8]

              dark:text-[#aeb8bf]
              dark:hover:text-white
            "
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } theme`}
          >
            {theme === "dark" ? (
              <FiSun size={15} />
            ) : (
              <FiMoon size={15} />
            )}

            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>

        {/* ================= MOBILE CONTROLS ================= */}

        <div className="flex items-center gap-2 md:hidden">
          {/* Theme */}

          <button
            onClick={onThemeToggle}
            className="
              rounded-md
              p-2
              text-[#42515c]
              transition-colors
              hover:bg-black/5

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#1f56a8]

              dark:text-[#d9e0e5]
              dark:hover:bg-white/5
            "
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } theme`}
          >
            {theme === "dark" ? (
              <FiSun size={19} />
            ) : (
              <FiMoon size={19} />
            )}
          </button>

          {/* Hamburger */}

          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="
              rounded-md
              p-2
              text-[#1c2730]

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#1f56a8]

              dark:text-white
            "
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <FiX size={23} />
            ) : (
              <FiMenu size={23} />
            )}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`
          overflow-hidden
          border-t
          transition-all
          duration-300
          md:hidden

          ${
            menuOpen
              ? "max-h-[320px] opacity-100"
              : "max-h-0 opacity-0"
          }

          border-[#d2cec5]
          bg-[#f5f1e9]/90
          backdrop-blur-xl

          dark:border-white/10
          dark:bg-[#121a21]/90
        `}
      >
        <div className="px-5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.target)}
              className="
                flex
                w-full
                items-center
                justify-between
                border-b
                border-[#d2cec5]
                py-4
                text-left
                text-[14px]
                text-[#596771]

                dark:border-white/10
                dark:text-[#c5cdd2]
              "
            >
              {link.name}

              <FiArrowUpRight
                size={15}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;