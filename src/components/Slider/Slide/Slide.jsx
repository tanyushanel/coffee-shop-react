import style from "./Slide.module.scss";
import cx from "classnames";

export const Slide = ({ slide, direction }) => {
  return (
    <div
      className={cx(
        style.slide,
        direction ? style.slide.next : style.slide.back
      )}
    >
      <img src={slide.src} alt="pic" />
      <h4 className="margin-15">{slide.name}</h4>
      <p className="medium-txt margin-15">{slide.desc}</p>
      <h4>{slide.price}</h4>
    </div>
  );
};
