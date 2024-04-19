import { Header } from "./components/Header/Header";
import { Intro } from "./components/Intro/Intro";
import { Slider } from "./components/Slider/Slider";
import { About } from "./components/About/About";
import { Mobile } from "./components/Mobile/Mobile";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Intro />
      <Slider />
      <About />
      <Mobile />
      <Footer />
    </div>
  );
}

export default App;
