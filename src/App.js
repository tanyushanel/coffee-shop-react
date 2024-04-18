import { Header } from "./components/Header/Header";
import { Intro } from "./components/Intro/Intro";
import { Slider } from "./components/Slider/Slider";
import { About } from "./components/About/About";
import { Mobile } from "./components/Mobile/Mobile";

function App() {
  return (
    <div className="container">
      <Header />
      <Intro />
      <Slider />
      <About />
      <Mobile />
    </div>
  );
}

export default App;
