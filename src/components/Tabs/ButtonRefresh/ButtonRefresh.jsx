import cx from "classnames";
import style from "./ButtonRefresh.module.scss";
export const ButtonRefresh = () => {
  return (
    <button
      id="load-more"
      className={cx(
        style.sliderButton,
        style.buttonRefresh,
        "flex-center button-secondary"
      )}
    >
      <span className="material-symbols-outlined"> refresh </span>
    </button>
  );
};
