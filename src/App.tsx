import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
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
import Blog from './components/Blog'
import NotesAndTests from './components/NotesTests'
import BlogDetails from './components/BlogDetails';
import CoursesPage from './components/CoursesPage';
import CourseDetail from './components/CourseDetail';
import FreeSample from './components/FreeSample';


function App() {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
            <>
              <Element name="home" id='home'>
              <TutoringHero />
              </Element>
              <Hbreak />
              <Element name="about" id='about'>
              <About />
              </Element>
              <Hbreak />
              <Element name="me" id='me'>
              <Me />
              </Element>
              <Hbreak />
              <Element name="features" id='features'>
              <Features />
              </Element>
              <Hbreak />
              <Element name="how-it-works" id='how-it-works'>
              <HowItWorks />
              </Element>
              <Hbreak />
              <Element name="testimonials" id='testimonials'>
              <Stats />
              </Element>
              <Hbreak />
              <Element name="pricing" id='pricing'>
              <Pricing />
              </Element>
              <Hbreak />
              <Element name="faq" id='faq'>
              <FAQ />
              </Element>
              <Hbreak />
              <CTASection />
            </>
            }
          />

          {/* Resources hub + individual resource pages (SEO-friendly slugs) */}
          <Route path="/resources" element={<NotesAndTests />} />
          <Route path="/resources/:slug" element={<CourseDetail />} />

          {/* Legacy redirect support — old notes-and-tests URLs still work */}
          <Route path="/notes-and-tests" element={<NotesAndTests />} />
          <Route path="/notes-and-tests/:id" element={<CourseDetail />} />

          {/* Lead gen funnel */}
          <Route path="/free-sample" element={<FreeSample />} />

          {/* Courses + Blog */}
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
