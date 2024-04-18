import { useState, useEffect } from "react";
import cx from "classnames";
import style from "./Menu.module.scss";
import { useWindowSize } from "./../../hooks/useWindowSize";
import { Navigation } from "./../../constants/Navigation";

export const Menu = () => {
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
      <span
        className={cx("material-symbols-outlined", style.burgerMenuButton)}
        onClick={onMenuToggle}
      >
        menu
      </span>
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
    </nav>
  );
};
