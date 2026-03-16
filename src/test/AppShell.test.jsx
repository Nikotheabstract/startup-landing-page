import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('App shell', () => {
  it('renders the core landmarks and skip navigation', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: /skip to content/i })).toHaveAttribute('href', '#main-content')
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /footer navigation/i })).toBeInTheDocument()
  })

  it('has a single primary page heading', () => {
    render(<App />)

    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent(/automate your workflow/i)
  })
})
