import { motion as Motion } from 'framer-motion'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import { Button } from './ui/Button'
import { Card } from './ui/Card'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut', delay },
  }),
}

export const Hero = () => (
  <section className="relative overflow-hidden pb-16 pt-12 sm:pb-20 lg:pb-28 lg:pt-16">
    <div className="pointer-events-none absolute inset-0 hero-gradient" aria-hidden="true" />
    <div className="pointer-events-none absolute inset-0 grid-pattern opacity-55" aria-hidden="true" />

    <div className="section-container relative">
      <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div className="max-w-2xl">
          <Motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-muted)]"
          >
            <FiCheckCircle className="text-[color:var(--primary)]" />
            AI workflow platform for modern teams
          </Motion.p>

          <Motion.h1
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl leading-tight sm:text-5xl lg:text-6xl"
          >
            Automate your workflow.
            <span className="block text-[color:var(--primary)]">Ship ideas in days, not weeks.</span>
          </Motion.h1>

          <Motion.p
            custom={0.25}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-base leading-8 text-[color:var(--text-muted)] sm:text-lg"
          >
            AutomateFlow unifies AI agents, approvals, and analytics into one command center so your
            team can move from request to result with no bottlenecks.
          </Motion.p>

          <Motion.div
            custom={0.35}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col items-start gap-3 sm:flex-row"
          >
            <Button size="lg">
              Start Free Trial
              <FiArrowRight />
            </Button>
            <Button size="lg" variant="secondary">
              View Live Demo
            </Button>
          </Motion.div>

          <Motion.div
            custom={0.45}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[color:var(--text-muted)]"
          >
            <span>Trusted by 2,500+ teams</span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--text-muted)]" />
            <span>99.95% uptime SLA</span>
          </Motion.div>
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative"
        >
          <Motion.div
            animate={{ y: [-7, 7, -7] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-2 -top-14 z-20 hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-4 py-3 shadow-soft sm:block"
          >
            <p className="text-xs text-[color:var(--text-muted)]">Task completion</p>
            <p className="text-lg font-semibold text-[color:var(--text)]">+47%</p>
          </Motion.div>

          <Motion.div
            animate={{ y: [8, -6, 8] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-3 bottom-10 z-20 hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-4 py-3 shadow-soft sm:block"
          >
            <p className="text-xs text-[color:var(--text-muted)]">Automations running</p>
            <p className="text-lg font-semibold text-[color:var(--text)]">14,281</p>
          </Motion.div>

          <Card className="relative overflow-hidden p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-[color:var(--text)]">Workflow Overview</h2>
              <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-500">
                Live
              </span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {['Leads', 'Ops', 'Support'].map((item, idx) => (
                  <div key={item} className="rounded-2xl bg-[color:var(--bg-muted)] p-3">
                    <p className="text-xs text-[color:var(--text-muted)]">{item}</p>
                    <p className="mt-2 text-xl font-semibold text-[color:var(--text)]">{36 + idx * 12}%</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-[color:var(--bg-muted)] p-4">
                <div className="mb-3 flex items-center justify-between text-xs text-[color:var(--text-muted)]">
                  <span>Process timeline</span>
                  <span>Last 7 days</span>
                </div>
                <div className="flex items-end gap-2">
                  {[45, 66, 52, 88, 72, 90, 81].map((h, i) => (
                    <Motion.div
                      key={h + i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.7, delay: i * 0.06 }}
                      className="h-32 w-full rounded-t-lg bg-gradient-to-t from-[color:var(--primary)] to-[color:var(--primary-soft)]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Motion.div>
      </div>
    </div>
  </section>
)
