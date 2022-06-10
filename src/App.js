import './App.css';
import About from './components/about/About';
import Blogs from './components/blogs/Blogs';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';

function App() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <About></About>
    <Services></Services>
    <Experience></Experience>
    <Projects></Projects>
    <Blogs></Blogs>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;
