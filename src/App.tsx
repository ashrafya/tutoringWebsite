import './App.css'
import { Element } from 'react-scroll'
import TutoringHero from './components/TutoringHero'
import Navbar from './components/Navbar'
import About from './components/About'
import Features from './components/Features'
import Pricing from './components/Pricing'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import Stats from './components/Stats'
import Hbreak from './components/Hbreak'
import CTASection from './components/CTA'
import Footer from './components/Footer'
import Me from './components/Me'
import EmailList from './components/EmailList'  


function App() {

  return (
    <>
      <Navbar />

      <Element name="home">
        <TutoringHero />
      </Element>

      <Hbreak />

      <EmailList open={false} onClose={function (): void {
        throw new Error('Function not implemented.')
      } } />


      <Element name="about">
        <About />
      </Element>

      <Hbreak />
      <Element name="as"></Element>
      <Me />

      <Hbreak />
      
      <Element name="features">
        <Features />
      </Element>

      <Hbreak />
      
      <Element name="how-it-works">
        <HowItWorks />
      </Element>

      <Hbreak />
      
      <Element name="pricing">
        <Pricing />
      </Element>

      <Hbreak />
      
      <Element name="testimonials">
        <Stats />
      </Element>

      <Hbreak />
      
      <Element name="faq">
        <FAQ />
      </Element>

      <Hbreak />

      <CTASection />

      <Footer />
    </>
  )
}

export default App
