import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import StickyMobileCallBar from '../components/layout/StickyMobileCallBar'
import Hero from '../components/sections/Hero'
import TrustBar from '../components/sections/TrustBar'
import Services from '../components/sections/Services'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Gallery from '../components/sections/Gallery'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import QuoteForm from '../components/sections/QuoteForm'

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-forest-900"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <QuoteForm />
      </main>
      <Footer />
      <StickyMobileCallBar />
    </>
  )
}
