import cx from "classnames";
import style from "./Slide.module.scss";

export const Slide = ({ slide }) => {
  return (
    <div className={cx(style.slide, style.active)}>
      <img src={slide.src} alt="pic" />
      <h4 className="margin-15">{slide.name}</h4>
      <p className="medium-txt margin-15">{slide.desc}</p>
      <h4>{slide.price}</h4>
    </div>
  );
};
