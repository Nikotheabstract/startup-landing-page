import { useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { FiMenu, FiMoon, FiSun, FiX, FiZap } from 'react-icons/fi'
import { Button } from './ui/Button'

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
]
const mobileMenuId = 'mobile-navigation-panel'

export const Navbar = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/80 backdrop-blur-xl">
      <div className="section-container">
        <nav className="flex h-20 items-center justify-between" aria-label="Main navigation">
          <a
            href="#main-content"
            className="inline-flex items-center gap-2 rounded-xl text-lg font-bold text-[color:var(--text)]"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--primary)] text-white">
              <FiZap />
            </span>
            AutomateFlow
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm">Get Started</Button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] text-[color:var(--text)] transition-colors hover:bg-[color:var(--bg-muted)]"
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] text-[color:var(--text)]"
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
            <button
              type="button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls={mobileMenuId}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] text-[color:var(--text)]"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <Motion.div
            id={mobileMenuId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[color:var(--border)] bg-[color:var(--bg)] md:hidden"
          >
            <div className="section-container space-y-5 py-5">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-3 py-2 text-sm text-[color:var(--text-muted)] transition-colors hover:bg-[color:var(--bg-muted)] hover:text-[color:var(--text)]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="secondary" size="sm">
                  Log in
                </Button>
                <Button size="sm">Get Started</Button>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
