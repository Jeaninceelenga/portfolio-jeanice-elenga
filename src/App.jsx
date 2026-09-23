import Header from './components/Header';
import About from './components/About';
import Formation from './components/Formation';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Formation />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;