import style from "./Header.module.scss";
import { Navbar } from "../Navbar/Navbar";
import { Cart } from "./../Cart/Cart";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContent}>
        <h1 className="invisible">Resource Coffee House</h1>
        <Link to="/">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/assets/icons/logo.svg`}
            alt="logo"
          />
        </Link>

        <Navbar />
        <Cart />
      </div>
    </header>
  );
};
