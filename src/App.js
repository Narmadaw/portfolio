import './App.scss';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
   </>
  );
}

export default App;
