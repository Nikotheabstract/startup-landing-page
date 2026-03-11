import { motion as Motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import { Button } from './ui/Button'
import { Card } from './ui/Card'

const plans = [
  {
    name: 'Starter',
    price: '$19',
    description: 'For small teams launching AI-assisted workflows.',
    features: ['Up to 5 workflows', 'Email support', 'Basic analytics', '1 integration'],
    cta: 'Start Starter',
  },
  {
    name: 'Pro',
    price: '$79',
    description: 'For growing teams that need scale and governance.',
    features: ['Unlimited workflows', 'Priority support', 'Advanced analytics', '15 integrations'],
    cta: 'Choose Pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with security and SLA needs.',
    features: ['Dedicated infrastructure', 'SSO/SAML', 'Custom onboarding', '24/7 support'],
    cta: 'Talk to Sales',
  },
]

export const Pricing = () => (
  <section id="pricing" className="py-16 sm:py-20 lg:py-24">
    <div className="section-container">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">
          Pricing
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Flexible plans for every stage</h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--text-muted)]">
          Start small, scale fast, and unlock enterprise-grade controls when your operations demand it.
        </p>
      </Motion.div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
          >
            <Card
              className={`relative h-full p-7 ${
                plan.highlighted ? 'border-[color:var(--primary)] ring-1 ring-[color:var(--primary)]' : ''
              }`}
            >
              {plan.highlighted && (
                <span className="absolute right-6 top-5 rounded-full bg-[color:var(--primary)] px-3 py-1 text-xs font-semibold text-white">
                  Recommended
                </span>
              )}
              <h3 className="text-2xl">{plan.name}</h3>
              <p className="mt-2 text-sm text-[color:var(--text-muted)]">{plan.description}</p>
              <p className="mt-6 text-4xl font-semibold">{plan.price}</p>
              <p className="mt-1 text-sm text-[color:var(--text-muted)]">per month</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[color:var(--text-muted)]">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--bg-muted)] text-[color:var(--primary)]">
                      <FiCheck size={13} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="mt-8 w-full" variant={plan.highlighted ? 'primary' : 'secondary'}>
                {plan.cta}
              </Button>
            </Card>
          </Motion.div>
        ))}
      </div>
    </div>
  </section>
)
