import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const footerLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#', label: 'Privacy' },
]

const socialLinks = [
  { href: '#', icon: FiTwitter, label: 'Twitter' },
  { href: '#', icon: FiLinkedin, label: 'LinkedIn' },
  { href: '#', icon: FiGithub, label: 'GitHub' },
]

export const Footer = () => (
  <footer className="border-t border-[color:var(--border)] py-10">
    <div className="section-container flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-lg font-bold">AutomateFlow</p>
        <p className="mt-2 text-sm text-[color:var(--text-muted)]">
          © {new Date().getFullYear()} AutomateFlow. All rights reserved.
        </p>
      </div>

      <nav className="flex flex-wrap gap-4" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--border)] bg-[color:var(--bg-elevated)] text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text)]"
          >
            <item.icon />
          </a>
        ))}
      </div>
    </div>
  </footer>
)
