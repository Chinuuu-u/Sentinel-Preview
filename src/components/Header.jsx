import { Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "../data/content";

export default function Header({ dark, toggleTheme, mobile, setMobile }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-(--line) bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex h-19 w-[92%] max-w-295 items-center justify-between gap-5">
        <a
          href="#top"
          className="flex items-center gap-3 font-extrabold tracking-[-.03em]"
        >
          <div className="grid h-9.5 w-9.5 place-items-center overflow-hidden rounded-xl ">
            {/* Put your logo at public/assets/logo.png */}
            {/* <span className="font-mono text-[13px] font-bold text-[var(--primary)]">C</span> */}
            <img src="public/assets/logo.png" alt="" />
          </div>
          CHERENKOV
        </a>

        <nav className="hidden items-center gap-7 text-[13px] font-bold text-(--muted) lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="transition hover:text-(--text)"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="grid h-10.5 w-10.5 place-items-center rounded-xl border border-(--line) bg-(--surface)"
            aria-label="Toggle theme"
          >
            {dark ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <button
            onClick={() => setMobile((value) => !value)}
            className="grid h-10.5 w-10.5 place-items-center rounded-xl border border-(--line) bg-(--surface) lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobile ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="border-t border-(--line) bg-(--surface) px-[4%] py-4 lg:hidden">
          <nav className="mx-auto grid w-[92%] max-w-295 gap-2">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobile(false)}
                className="rounded-lg px-3 py-2 text-sm font-bold text-(--muted)"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
