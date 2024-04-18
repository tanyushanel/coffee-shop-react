import style from "./Header.module.scss";
import { Menu } from "./../Menu/Menu";
import { Cart } from "./../Cart/Cart";

export const Header = () => {
  return (
    <header>
      <div className={style.headerContent}>
        <h1 className="invisible">Resource Coffee House</h1>
        <a href="index.html">
          <img className="logo" src="/assets/icons/logo.svg" alt="logo" />
        </a>

        <Menu />
        <Cart />
      </div>
    </header>
  );
};
