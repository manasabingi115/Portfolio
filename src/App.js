import "./styles.css";
import Header from "./header";
import Introduction from "./introduction";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
