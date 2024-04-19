import style from "./Intro.module.scss";
import cx from "classnames";
import { Link } from "react-router-dom";

export const Intro = () => {
  return (
    <div className={style.bannerContainer}>
      <video className={style.video} autoPlay loop muted>
        <source src="assets/video.mp4" type="video/mp4"></source>
      </video>
      <div className={style.bannerDesc}>
        <h2 className="light-color">
          <span className="accent-txt">Enjoy</span> premium coffee at our
          charming cafe
        </h2>
        <p className="medium-txt margin-40 light-color">
          With its inviting atmosphere and delicious coffee options, the Coffee
          House Resource is a popular destination for coffee lovers and those
          seeking a warm and inviting space to enjoy their favorite beverage.
        </p>

        <Link
          to="/menu"
          className={cx(
            style.bannerButton,
            "flex-center gap-10 button-primary bg-fill-light"
          )}
        >
          Menu
          <span className={cx(style.icon, "material-symbols-outlined")}>
            coffee
          </span>
        </Link>
      </div>
    </div>
  );
};
