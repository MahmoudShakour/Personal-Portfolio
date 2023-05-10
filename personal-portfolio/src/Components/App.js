import "../Styles/App.css";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Header from "./Header";
import Footer from "./Footer";
function App() {
  return (
    <div className="app" >
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
