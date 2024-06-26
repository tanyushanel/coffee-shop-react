import cx from "classnames";
import { useEffect, useState } from "react";
import { Navigation } from "../../constants/Navigation";
import { useWindowSize } from "../../hooks/useWindowSize";
import style from "./Navbar.module.scss";
import { HashLink } from "react-router-hash-link";

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
                <HashLink to={href} onClick={onMenuClose}>
                  {name}
                </HashLink>
              </li>
            );
          })}
        </ul>
      )}

      <img
        className={style.burgerMenuButton}
        onClick={onMenuToggle}
        src={`${process.env.PUBLIC_URL}/assets/icons/button-icon-burger.svg`}
        alt="burger-menu-pic"
      />
    </nav>
  );
};
