import cx from "classnames";
import style from "./TabImg.module.scss";

export const TabImg = ({ src, category }) => {
  return (
    <li
      key={category}
      className={cx(style.tabImg, "medium-txt flex-center gap-8")}
    >
      <img src={src} alt="tabImg" />
      <span className="capitalize">{category}</span>
    </li>
  );
};
