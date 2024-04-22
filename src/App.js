import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "./components/Spinner/Spinner";

const Home = lazy(() => import("./pages/Home/Home"));
const Menu = lazy(() => import("./pages/Menu/Menu"));

function App() {
  return (
    <div className="container">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
