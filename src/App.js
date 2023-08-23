
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./pages/NavBar";
import { Banner } from "./pages/Banner";
import  Skills  from "./pages/Skills";
import  Experience  from "./pages/Experience";
import  Projects  from "./pages/Project";
import  Service  from "./pages/Services";
import  Contact  from "./pages/Contact";
import  Footer  from "./pages/Footer";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Experience/>
      <Projects />
      <Service />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;


