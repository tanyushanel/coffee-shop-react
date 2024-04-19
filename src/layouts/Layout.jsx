import { Header } from "./../components/Header/Header";
import { Footer } from "./../components/Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};
