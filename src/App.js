import './App.scss';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';

function App() {
  return (
   <>
   <Header />
   <Hero />
   <AboutMe />
   <Projects />
   <TechStack />
   </>
  );
}

export default App;
