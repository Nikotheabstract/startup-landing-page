import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { ProductPreview } from './components/ProductPreview'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'
import { useDarkMode } from './hooks/useDarkMode'

function App() {
  const { isDark, toggleTheme } = useDarkMode()

  return (
    <div className="relative min-h-screen">
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-xl bg-[color:var(--bg-elevated)] px-3 py-2 text-sm font-semibold text-[color:var(--text)] focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <Features />
        <ProductPreview />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
