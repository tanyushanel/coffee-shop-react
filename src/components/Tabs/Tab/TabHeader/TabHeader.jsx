import cx from "classnames";
import style from "./TabHeader.module.scss";

export const TabHeader = ({ src, category, active, onClick }) => {
  return (
    <li
      key={category}
      onClick={onClick}
      className={cx(
        style.tabHeader,
        "medium-txt flex-center gap-8",
        active ? style.active : ""
      )}
    >
      <img src={src} alt="tabHeader" />
      <span className="capitalize">{category}</span>
    </li>
  );
};
