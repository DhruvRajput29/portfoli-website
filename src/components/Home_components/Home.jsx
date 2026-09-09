import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'
const Home=()=>{
    return(
        <>
        <Navbar/>
        <main>
      <Hero/>
      <About/>
      <Skills/>
      <Resume/>
      <Contact/>
        </main>
      <Footer/>
        </>
    );
}
export default Home;