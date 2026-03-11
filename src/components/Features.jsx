import { motion as Motion } from 'framer-motion'
import {
  FiActivity,
  FiCheckSquare,
  FiCommand,
  FiLayers,
  FiShield,
  FiTrendingUp,
} from 'react-icons/fi'
import { Card } from './ui/Card'

const features = [
  {
    icon: FiCommand,
    title: 'AI Command Builder',
    description: 'Design end-to-end automation flows with prompts, conditions, and fallbacks in minutes.',
  },
  {
    icon: FiLayers,
    title: 'Cross-App Integrations',
    description: 'Connect CRM, support, analytics, docs, and chat tools into one shared operating layer.',
  },
  {
    icon: FiTrendingUp,
    title: 'Predictive Routing',
    description: 'Prioritize every request with ML signals that learn from your team response patterns.',
  },
  {
    icon: FiShield,
    title: 'Compliance Controls',
    description: 'Role-based permissions, audit logs, and policy checks secure every automation path.',
  },
  {
    icon: FiCheckSquare,
    title: 'Human Approvals',
    description: 'Insert manual checkpoints exactly where required while keeping every task traceable.',
  },
  {
    icon: FiActivity,
    title: 'Real-Time Monitoring',
    description: 'Track run health, latency, and value metrics from an always-on mission control feed.',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export const Features = () => (
  <section id="features" className="py-16 sm:py-20 lg:py-24">
    <div className="section-container">
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={reveal}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">
          Features
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Everything needed to orchestrate modern operations</h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--text-muted)]">
          AutomateFlow gives teams a flexible AI operations layer with clear governance and measurable
          impact.
        </p>
      </Motion.div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Motion.div
            key={feature.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -8 }}
          >
            <Card className="h-full p-6 transition-shadow duration-300 hover:shadow-[0_20px_56px_-35px_rgba(1,112,126,0.6)]">
              <Motion.div
                whileHover={{ rotate: -6, scale: 1.08 }}
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--bg-muted)] text-[color:var(--primary)]"
              >
                <feature.icon size={22} />
              </Motion.div>
              <h3 className="text-xl">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">{feature.description}</p>
            </Card>
          </Motion.div>
        ))}
      </div>
    </div>
  </section>
)
