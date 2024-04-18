import { Header } from "./components/Header/Header";
import { Intro } from "./components/Intro/Intro";
import { Slider } from "./components/Slider/Slider";

function App() {
  return (
    <div className="container">
      <Header />
      <Intro />
      <Slider />
    </div>
  );
}

export default App;
