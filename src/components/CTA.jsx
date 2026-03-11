import { motion as Motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { Button } from './ui/Button'

export const CTA = () => (
  <section className="py-16 sm:py-20 lg:py-24">
    <div className="section-container">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] px-6 py-12 sm:px-10 sm:py-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#57d5df3b] via-[#8fb8fb30] to-[#8ee9be2f]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl">Start building with AI today</h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--text-muted)]">
            Launch your first production-ready workflow in under 20 minutes with AutomateFlow.
          </p>
          <Button size="lg" className="mt-8">
            Create Free Account
            <FiArrowRight />
          </Button>
        </div>
      </Motion.div>
    </div>
  </section>
)
