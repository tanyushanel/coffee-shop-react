import cx from "classnames";
import style from "./Tabs.module.scss";
export const Tabs = () => {
  return (
    <>
      <ul
        className={cx(style.tabContainer, "flex-center gap-12 margin-40")}
      ></ul>
      <article>
        <ul
          id="tab-content"
          className={cx(style.gridMenuContainer, "flex-center gap-40")}
        ></ul>
        <button
          id="load-more"
          className={cx(
            style.sliderButton,
            "flex-center  button-secondary bttn-refresh"
          )}
        >
          <span className="material-symbols-outlined"> refresh </span>
        </button>
      </article>
    </>
  );
};
