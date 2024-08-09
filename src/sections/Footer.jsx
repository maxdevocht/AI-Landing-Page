import { logoIcon, instaSocial, xSocial, youtubeSocial } from "../assets";

const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <img src={logoIcon} alt="logo" className="h-8 w-8" />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>

          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Company
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Changelog
            </a>
          </nav>

          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <img
              src={instaSocial}
              alt="logo"
              className="h-6 w-6 cursor-pointer"
            />
            <img src={xSocial} alt="logo" className="h-6 w-6 cursor-pointer" />
            <img
              src={youtubeSocial}
              alt="logo"
              className="h-6 w-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
