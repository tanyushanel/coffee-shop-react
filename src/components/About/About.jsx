import style from "./About.module.scss";
import cx from "classnames";

export const About = () => {
  return (
    <article id="about" className={cx(style.aboutContainer, "margin-100")}>
      <h3 className="margin-40">
        Resource is
        <span className="accent-txt"> the perfect and cozy place</span> where
        you can enjoy a variety of hot beverages, relax, catch up with friends,
        or get some work done.
      </h3>
      <ul className={cx(style.gridContainer, "flex gap-40")}>
        <li className={style.gridItem}>
          <img
            className={style.scalable}
            src="assets/pics/about-1.jpg"
            alt="pic"
          />
        </li>
        <li className={style.gridItem}>
          <img
            className={style.scalable}
            src="assets/pics/about-2.jpg"
            alt="pic"
          />
        </li>
        <li className={style.gridItem}>
          <img
            className={style.scalable}
            src="assets/pics/about-3.jpg"
            alt="pic"
          />
        </li>
        <li className={style.gridItem}>
          <img
            className={style.scalable}
            src="assets/pics/about-4.jpg"
            alt="pic"
          />
        </li>
      </ul>
    </article>
  );
};
