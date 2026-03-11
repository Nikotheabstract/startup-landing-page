import { motion as Motion } from 'framer-motion'
import { Card } from './ui/Card'

const testimonials = [
  {
    name: 'Maya Chen',
    role: 'Head of Operations, Brightline',
    quote:
      'AutomateFlow replaced five disconnected tools and cut our manual queue by 62% in the first month.',
    initials: 'MC',
  },
  {
    name: 'Jamal Ortega',
    role: 'Founder, ScalePilot',
    quote:
      'Our team now ships onboarding and billing automations in days instead of sprints. The ROI was immediate.',
    initials: 'JO',
  },
  {
    name: 'Elena Rossi',
    role: 'VP Product, HelixAI',
    quote:
      'The approval layers are exactly what we needed. AI speed with enterprise control is a rare combination.',
    initials: 'ER',
  },
]

export const Testimonials = () => (
  <section id="testimonials" className="py-16 sm:py-20 lg:py-24">
    <div className="section-container">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">
          Testimonials
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Teams trust AutomateFlow for mission-critical workflows</h2>
      </Motion.div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Card className="h-full p-6">
              <p className="text-sm leading-7 text-[color:var(--text-muted)]">“{item.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[#8ccae6] text-sm font-bold text-white">
                  {item.initials}
                </div>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs text-[color:var(--text-muted)]">{item.role}</p>
                </div>
              </div>
            </Card>
          </Motion.div>
        ))}
      </div>
    </div>
  </section>
)
