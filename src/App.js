import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "./components/Spinner/Spinner";
import { Modal } from "./components/Modal/Modal";

const Home = lazy(() => import("./pages/Home/HomeLayout"));
const Menu = lazy(() => import("./pages/Menu/MenuLayout"));

function App() {
  return (
    <div className="container">
      <Modal />
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
