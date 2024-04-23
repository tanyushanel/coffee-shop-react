import style from "./Mobile.module.scss";
import cx from "classnames";

export const Mobile = () => {
  return (
    <article id="mobile" className={cx(style.mobilePresentation, "flex-wrap")}>
      <div className={style.mobileDesc}>
        <h3 className="margin-40">
          <span className="accent-txt">Download</span> our apps to start
          ordering
        </h3>
        <p className="medium-txt margin-40">
          Download the Resource app today and experience the comfort of ordering
          your favorite coffee from wherever you are
        </p>
        <div className={cx(style.storeButtonContainer, "flex gap-20")}>
          <button
            className={cx(style.storeButton, "flex button-secondary gap-8")}
          >
            <img src="/assets/icons/app-icon.svg" alt="app-icon" />

            <span className={cx(style.buttonDesc, "left")}>
              <span className="caption-txt">Available on the</span>
              <span>App Store</span>
            </span>
          </button>
          <button
            className={cx(style.storeButton, "flex button-secondary gap-8")}
          >
            <img src="/assets/icons/gp-icon.svg" alt="gp-icon" />

            <span className={cx(style.buttonDesc, "left")}>
              <span className="caption-txt">Available on</span>
              <span>Google Play</span>
            </span>
          </button>
        </div>
      </div>
      <div className={style.mobileImg}>
        <img src="/assets/pics/mobile-screens.png" alt="mobile-screens" />
      </div>
    </article>
  );
};
