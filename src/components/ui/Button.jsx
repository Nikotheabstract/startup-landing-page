import { motion as Motion } from 'framer-motion'
import clsx from 'clsx'

const styles = {
  primary:
    'bg-[color:var(--primary)] text-white hover:bg-[color:var(--primary-soft)] shadow-soft hover:shadow-[0_22px_52px_-30px_rgba(5,130,144,0.65)]',
  secondary:
    'bg-[color:var(--bg-elevated)] text-[color:var(--text)] ring-1 ring-[color:var(--border)] hover:bg-[color:var(--bg-muted)]',
  ghost:
    'bg-transparent text-[color:var(--text)] hover:bg-[color:var(--bg-muted)]',
}

const sizes = {
  sm: 'h-10 rounded-xl px-4 text-sm font-semibold',
  md: 'h-11 rounded-xl px-5 text-sm font-semibold',
  lg: 'h-12 rounded-2xl px-6 text-base font-semibold',
}

export const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  children,
  ...props
}) => (
  <Motion.button
    type={type}
    whileTap={{ scale: 0.97 }}
    className={clsx(
      'inline-flex items-center justify-center gap-2 transition-all duration-300 focus-visible:ring-[color:var(--primary-soft)]',
      styles[variant],
      sizes[size],
      className,
    )}
    {...props}
  >
    {children}
  </Motion.button>
)
