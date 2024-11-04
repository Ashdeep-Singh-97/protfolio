import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import EdEx from "./sections/EdEx";
import Home from "./sections/Home";
import Skills from "./sections/Skills";

export default function LandingPage() {

    return (
      <>
        <Home />
        <AboutMe />
        <Skills />
        <EdEx />
        <Contact />
      </>
    )
  }