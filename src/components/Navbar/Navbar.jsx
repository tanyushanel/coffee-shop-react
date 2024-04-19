import { useState, useEffect } from "react";
import cx from "classnames";
import style from "./Navbar.module.scss";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Navigation } from "../../constants/Navigation";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const nav = Object.values(Navigation);

  const { width } = useWindowSize();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(width > 768);

    return;
  }, [width]);

  const onMenuToggle = () => {
    if (width <= 768) setIsMenuOpen(!isMenuOpen);
  };

  const onMenuClose = () => {
    if (width <= 768) setIsMenuOpen(false);
  };
  return (
    <nav className={style.menuBox}>
      {isMenuOpen && (
        <ul className={style.menuItems}>
          {nav.map(({ href, name }) => {
            return (
              <li key={href} className={cx(style.menuItem, "pompiere-font")}>
                <a href={href} onClick={onMenuClose}>
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      )}

      <img
        className={style.burgerMenuButton}
        onClick={onMenuToggle}
        src="assets/icons/button-icon-burger.svg"
        alt="burger-menu-pic"
      />
    </nav>
  );
};
