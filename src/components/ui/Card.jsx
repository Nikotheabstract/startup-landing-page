import clsx from 'clsx'

export const Card = ({ className, children, ...props }) => (
  <div
    className={clsx(
      'rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] shadow-soft',
      className,
    )}
    {...props}
  >
    {children}
  </div>
)
