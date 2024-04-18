import { Header } from "./components/Header/Header";
import { Intro } from "./components/Intro/Intro";
import { Slider } from "./components/Slider/Slider";
import { About } from "./components/About/About";

function App() {
  return (
    <div className="container">
      <Header />
      <Intro />
      <Slider />
      <About />
    </div>
  );
}

export default App;
