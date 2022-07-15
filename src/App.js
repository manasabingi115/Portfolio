import "./styles.css";
import Header from "./header";
import Introduction from "./introduction";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";
import Footer from "./footer";

export default function App() {
  return (
    <div className="App">
      <div className="page-main-content">
        <Header />
        <Introduction />
        <Skills />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
