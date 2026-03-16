import { useState } from 'react'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from '../components/Navbar'

const NavbarHarness = () => {
  const [isDark, setIsDark] = useState(false)

  return <Navbar isDark={isDark} toggleTheme={() => setIsDark((current) => !current)} />
}

describe('Navbar', () => {
  it('exposes theme toggle state for assistive tech', async () => {
    const user = userEvent.setup()
    render(<NavbarHarness />)

    const toggles = screen.getAllByRole('button', { name: /switch to dark mode/i })
    expect(toggles.length).toBeGreaterThan(0)
    toggles.forEach((toggle) => expect(toggle).toHaveAttribute('aria-pressed', 'false'))

    await user.click(toggles[0])

    const updatedToggles = screen.getAllByRole('button', { name: /switch to light mode/i })
    updatedToggles.forEach((toggle) => expect(toggle).toHaveAttribute('aria-pressed', 'true'))
  })

  it('toggles the mobile menu and closes it after navigation', async () => {
    const user = userEvent.setup()
    render(<NavbarHarness />)

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)

    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute('aria-expanded', 'true')

    const panel = document.getElementById('mobile-navigation-panel')
    expect(panel).not.toBeNull()

    await user.click(within(panel).getByRole('link', { name: /pricing/i }))

    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute('aria-expanded', 'false')
    await waitFor(() => {
      expect(document.getElementById('mobile-navigation-panel')).toBeNull()
    })
  })
})
