import './App.css'
import { HashRouter} from 'react-router-dom'
// import { HashRouter, Routes, Route } from 'react-router-dom'
// import { Element } from 'react-scroll'
// import TutoringHero from './components/TutoringHero'
// import Navbar from './components/Navbar'
// import About from './components/About'
// import Features from './components/Features'
// import Pricing from './components/Pricing'
// import HowItWorks from './components/HowItWorks'
// import FAQ from './components/FAQ'
// import Stats from './components/Stats'
// import Hbreak from './components/Hbreak'
// import CTASection from './components/CTA'
// import Footer from './components/Footer'
// import Me from './components/Me'
// import Blog from './components/Blog'
// import NotesAndTests from './components/NotesTests'
// import BlogDetails from './components/BlogDetails';



function App() {

  return (

    <HashRouter>
      <h1>Hello Worlds</h1>
    </HashRouter>
    // <HashRouter>
    //   <Navbar />
    //   {/* Main content rendered via routes */}
    //   <Routes>
    //   <Route
    //     path="/"
    //     element={
    //     <>
    //       <Element name="home">
    //       <TutoringHero />
    //       </Element>
    //       <Hbreak />
    //       <Element name="about">
    //       <About />
    //       </Element>
    //       <Hbreak />
    //       <Element name="me">
    //       <Me />
    //       </Element>
    //       <Hbreak />
    //       <Element name="features">
    //       <Features />
    //       </Element>
    //       <Hbreak />
    //       <Element name="how-it-works">
    //       <HowItWorks />
    //       </Element>
    //       <Hbreak />
    //       <Element name="testimonials">
    //       <Stats />
    //       </Element>
    //       <Hbreak />
    //       <Element name="pricing">
    //       <Pricing />
    //       </Element>
    //       <Hbreak />
    //       <Element name="faq">
    //       <FAQ />
    //       </Element>
    //       <Hbreak />
    //       <CTASection />
    //     </>
    //     }
    //   />
    //   <Route
    //     path="/notes-and-tests"
    //     element={
    //     <>
    //       <NotesAndTests />
    //     </>
    //     }
    //   />
    //   <Route
    //     path="/blog"
    //     element={
    //     <>
    //       <Blog />
    //     </>
    //     }
    //   />
    //   <Route path="/blog/:id" 
    //     element={<BlogDetails />} 
    //   />
    //   </Routes>
    //   <Footer />
    // </HashRouter>
  )
}

export default App
