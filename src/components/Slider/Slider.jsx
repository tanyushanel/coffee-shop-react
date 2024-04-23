import cx from "classnames";
import { useState } from "react";
import { Slide } from "./Slide/Slide";
import style from "./Slider.module.scss";
import { useSwipeable } from "react-swipeable";

export const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setDirection(1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setDirection(0);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <article
      id="slider"
      className={cx(style.sliderContainer, "center margin-100")}
      {...handlers}
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
          onClick={prevSlide}
        >
          <span className="material-symbols-outlined"> arrow_back </span>
        </button>
        <div className={style.sliderContent}>
          {slides.map(
            (item, index) =>
              index === current && (
                <Slide slide={item} direction={direction} key={index} />
              )
          )}
        </div>
        <button
          className={cx(
            style.sliderButton,
            style.next,
            "flex-center button-secondary"
          )}
          onClick={nextSlide}
        >
          <span className="material-symbols-outlined"> arrow_forward </span>
        </button>
      </div>
      <div className="flex-center gap-10">
        {slides.map((item, index) => (
          <p
            key={index}
            className={cx(
              style.sliderControl,
              index === current && style.active
            )}
          >
            <span></span>
          </p>
        ))}
      </div>
    </article>
  );
};
