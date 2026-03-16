import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { ProductPreview } from '../components/ProductPreview'

describe('Section accessibility', () => {
  it('provides a screen-reader summary for the hero process timeline', () => {
    render(<Hero />)

    expect(
      screen.getByText(/workflow throughput trend for the last seven days, ranging from 45 percent to 90 percent/i),
    ).toBeInTheDocument()

    const chart = screen.getByText(/workflow throughput trend/i).nextElementSibling
    expect(chart).toHaveAttribute('aria-hidden', 'true')
  })

  it('keeps the product preview mock navigation presentational and describes the chart', () => {
    render(<ProductPreview />)

    const dashboardNav = screen.getByRole('navigation', { name: /dashboard sections/i })
    expect(within(dashboardNav).queryAllByRole('button')).toHaveLength(0)
    expect(within(dashboardNav).getByText(/\(active section\)/i)).toBeInTheDocument()

    expect(screen.queryByRole('button', { name: /last 30 days/i })).not.toBeInTheDocument()
    expect(
      screen.getByText(/example weekly throughput bars ranging from 24 percent to 81 percent/i),
    ).toBeInTheDocument()
  })

  it('marks footer external links safely for new tabs', () => {
    render(<Footer />)

    const repositoryLink = screen.getByRole('link', { name: /repository/i })
    expect(repositoryLink).toHaveAttribute('target', '_blank')
    expect(repositoryLink).toHaveAttribute('rel', expect.stringContaining('noreferrer'))
    expect(repositoryLink).toHaveAttribute('rel', expect.stringContaining('noopener'))

    const githubLink = screen.getByRole('link', { name: /github/i })
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', expect.stringContaining('noreferrer'))
    expect(githubLink).toHaveAttribute('rel', expect.stringContaining('noopener'))
  })
})
