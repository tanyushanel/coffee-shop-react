import { Route, Routes } from "react-router-dom";
import { Menu } from "./pages/Menu/Menu";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
