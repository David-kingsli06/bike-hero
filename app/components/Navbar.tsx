import Link from "next/link";

const leftLinks = ["Machines", "Specs", "Track Days"];
const rightLinks = ["Telemetry", "About"];

export default function Navbar() {
  return (
    <header className="relative z-30 w-full pt-4 px-6 md:px-12 flex items-center justify-between">
      {/* Left nav links */}
      <nav className="flex items-center gap-6 md:gap-8">
        {leftLinks.map((item, idx) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`text-xs md:text-sm tracking-wide font-medium transition-colors ${
              idx === 0
                ? "text-white font-semibold drop-shadow"
                : "text-white/75 hover:text-white"
            }`}
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Center notch badge holding the brand name */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-white px-7 pt-2.5 pb-2.5 rounded-b-2xl shadow-md flex items-center justify-center">
        <span className="font-display tracking-tight text-slate-900 text-lg md:text-xl font-bold uppercase leading-none">
          Bike Hero.
        </span>
      </div>

      {/* Right nav links + CTA button */}
      <div className="flex items-center gap-6 md:gap-8">
        <nav className="hidden sm:flex items-center gap-6 md:gap-8">
          {rightLinks.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs md:text-sm tracking-wide font-medium text-white/75 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <Link
          href="#test-ride"
          className="bg-white text-slate-900 font-bold text-xs md:text-sm px-5 py-2.5 rounded-full shadow hover:bg-slate-50 transition-transform active:scale-95"
        >
          Book Track Test
        </Link>
      </div>
    </header>
  );
}
