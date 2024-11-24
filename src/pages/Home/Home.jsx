import Header from "@components/Header/Header"
import Hero from "./Hero"
import About from "./About"
import Teachers from "./Teachers"
import Resources from "./Resources"
import Contact from "./Contact"
import Cta from "./Cta"
import Footer from "@components/Footer/Footer"
import Testimonials from "./Testimonials"

const Home = () => {
  return (
    <>
      <Header />
      <main className="content-grid">
        <Hero />
        <About />
        <Teachers />
        <Testimonials />
        <Resources />
        <Contact />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default Home