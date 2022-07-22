import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import {Helmet} from "react-helmet";


function App() {
  return (
    <div className="App">
        <Helmet>
                <meta charSet="utf-8" />
                <title>Cullen Watson</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Cullen Watson's Portfolio Site" />
        </Helmet>
      <header className="App-header">
      
      </header>

      < Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact/>

  </div>
    
  );
}

export default App;