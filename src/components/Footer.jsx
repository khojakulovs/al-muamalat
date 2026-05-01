const Footer = () => {
  const navLinks = ["Home", "About", "Service", "Contact Us"];

  return (
    <footer className="bg-gradient-to-br from-teal-600 to-teal-700 px-8 pt-10 pb-6">
      <div className="custom-container">
        {/* Brand */}
        <div className="flex items-center justify-center gap-2.5 mb-6">
          <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="3" width="6" height="6" rx="1.5" fill="#1BAE7E" />
              <rect x="11" y="3" width="6" height="6" rx="1.5" fill="#1BAE7E" />
              <rect x="3" y="11" width="6" height="6" rx="1.5" fill="#1BAE7E" />
              <rect
                x="11"
                y="11"
                width="6"
                height="6"
                rx="1.5"
                fill="#1BAE7E"
                opacity="0.4"
              />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[15px] font-medium text-white">Dior</span>
            <span className="text-[13px] text-white/70">design</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex justify-center flex-wrap gap-8 mb-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[13.5px] text-white/85 hover:text-white transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex justify-center gap-3.5 mb-6">
          {/* TikTok */}
          <button className="w-[30px] h-[30px] rounded-full border border-white/40 hover:bg-white/15 hover:border-white flex items-center justify-center transition-all duration-150">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.13a8.16 8.16 0 004.77 1.52V7.21a4.85 4.85 0 01-1-.52z" />
            </svg>
          </button>

          {/* Facebook */}
          <button className="w-[30px] h-[30px] rounded-full border border-white/40 hover:bg-white/15 hover:border-white flex items-center justify-center transition-all duration-150">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </button>

          {/* Twitter */}
          <button className="w-[30px] h-[30px] rounded-full border border-white/40 hover:bg-white/15 hover:border-white flex items-center justify-center transition-all duration-150">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </button>

          {/* Instagram */}
          <button className="w-[30px] h-[30px] rounded-full border border-white/40 hover:bg-white/15 hover:border-white flex items-center justify-center transition-all duration-150">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/25 mb-4" />

        {/* Copyright */}
        <p className="text-[12px] text-white/65 text-center">
          Copyright Satyam Studio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
