import { motion as Motion } from 'framer-motion'
import { FiBell, FiFilter, FiHome, FiPieChart, FiSettings, FiUsers } from 'react-icons/fi'
import { Card } from './ui/Card'

const cards = [
  { label: 'Runs Today', value: '3,812', delta: '+18%' },
  { label: 'Avg. Latency', value: '0.9s', delta: '-23%' },
  { label: 'Saved Hours', value: '1,420', delta: '+31%' },
]

const tableRows = [
  { name: 'Lead Qualification', owner: 'Sales Ops', status: 'Active' },
  { name: 'Invoice Reconciliation', owner: 'Finance', status: 'Active' },
  { name: 'Onboarding Sequence', owner: 'People Team', status: 'Pending' },
  { name: 'Escalation Triage', owner: 'Support', status: 'Active' },
]

export const ProductPreview = () => (
  <section className="py-16 sm:py-20 lg:py-24">
    <div className="section-container">
      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--primary)]">
          Product Preview
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Your AI control center, built for clarity</h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--text-muted)]">
          Manage workflows, monitor usage, and inspect every run from a single dashboard view.
        </p>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65 }}
        className="mt-12"
      >
        <Card className="overflow-hidden p-0">
          <div className="grid min-h-[540px] md:grid-cols-[230px_1fr]">
            <aside className="border-b border-[color:var(--border)] bg-[color:var(--bg-muted)] p-5 md:border-b-0 md:border-r">
              <p className="mb-6 text-sm font-semibold text-[color:var(--text-muted)]">Dashboard</p>
              <nav className="space-y-2" aria-label="Dashboard navigation">
                {[
                  { icon: FiHome, label: 'Overview' },
                  { icon: FiPieChart, label: 'Analytics' },
                  { icon: FiUsers, label: 'Workflows' },
                  { icon: FiBell, label: 'Alerts' },
                  { icon: FiSettings, label: 'Settings' },
                ].map((item, idx) => (
                  <button
                    key={item.label}
                    type="button"
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                      idx === 0
                        ? 'bg-[color:var(--bg-elevated)] text-[color:var(--text)] shadow-sm'
                        : 'text-[color:var(--text-muted)] hover:bg-[color:var(--bg-elevated)] hover:text-[color:var(--text)]'
                    }`}
                  >
                    <item.icon />
                    {item.label}
                  </button>
                ))}
              </nav>
            </aside>

            <div className="space-y-6 p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl">Automation Analytics</h3>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-elevated)] px-3 py-2 text-sm text-[color:var(--text-muted)]"
                >
                  <FiFilter />
                  Last 30 days
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {cards.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-[color:var(--bg-muted)] p-4">
                    <p className="text-xs text-[color:var(--text-muted)]">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold">{item.value}</p>
                    <p className="mt-2 text-xs text-emerald-500">{item.delta}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-[color:var(--border)] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-medium text-[color:var(--text-muted)]">Workflow Throughput</p>
                  <p className="text-xs text-[color:var(--text-muted)]">Weekly</p>
                </div>
                <div className="flex h-40 items-end gap-2">
                  {[24, 47, 35, 53, 44, 67, 59, 73, 69, 81].map((value, index) => (
                    <Motion.div
                      key={value + index}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: index * 0.04 }}
                      className="w-full rounded-t-md bg-gradient-to-t from-[color:var(--primary)] to-[#74e0e9]"
                    />
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[color:var(--border)]">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-[color:var(--bg-muted)] text-[color:var(--text-muted)]">
                    <tr>
                      <th className="px-4 py-3 font-medium">Workflow</th>
                      <th className="px-4 py-3 font-medium">Team</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row) => (
                      <tr key={row.name} className="border-t border-[color:var(--border)]">
                        <td className="px-4 py-3 text-[color:var(--text)]">{row.name}</td>
                        <td className="px-4 py-3 text-[color:var(--text-muted)]">{row.owner}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                              row.status === 'Active'
                                ? 'bg-emerald-500/15 text-emerald-500'
                                : 'bg-amber-500/20 text-amber-500'
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>
      </Motion.div>
    </div>
  </section>
)
