import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Home from "../components/home";
import Navbar from "../components/navbar";
import ScrollToTopButton from "../components/scroll-to-top";
import Services from "../components/services";
import Skills from "../components/skills";
import Works from "../components/works";

const Portfolio = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Services />
            <Works />
            <Contact />
            <Footer />
            <ScrollToTopButton />
        </>
    )
}

export default Portfolio;