import style from "./Slider.module.scss";

import cx from "classnames";

export const Slider = () => {
  return (
    <article
      id="slider"
      className={cx(style.sliderContainer, "center margin-100")}
    >
      <h3>
        Choose your <span className="accent-txt">favorite</span> coffee
      </h3>
      <div className={cx(style.slider, "flex-center  margin-40")}>
        <button
          className={cx(
            style.sliderButton,
            "flex-center previous button-secondary"
          )}
        >
          <span className="material-symbols-outlined"> arrow_back </span>
        </button>
        <div className={style.sliderContent}>
          <div className={style.slide}>
            <img
              className={style.sliderImg}
              src="/assets/pics/coffee-slider-1.png"
              alt="pic"
            />
            <h4 className="margin-15">S’mores Frappuccino</h4>
            <p className="medium-txt margin-15">
              This new drink takes an espresso and mixes it with brown sugar and
              cinnamon before being topped with oat milk.
            </p>
            <h4 className="price">$5.50</h4>
          </div>
        </div>
        <button
          className={cx(
            style.sliderButton,
            style.next,
            "flex-center button-secondary"
          )}
        >
          <span className="material-symbols-outlined"> arrow_forward </span>
        </button>
      </div>
      <div className="flex-center gap-10">
        <p className={cx(style.sliderControl, style.sliderControl.active)}>
          <span></span>
        </p>
        <p className={style.sliderControl}>
          <span></span>
        </p>
        <p className={style.sliderControl}>
          <span></span>
        </p>
      </div>
    </article>
  );
};
