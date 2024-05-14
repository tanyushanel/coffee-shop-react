import style from "./Intro.module.scss";
import cx from "classnames";
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spinner } from "./../Spinner/Spinner";

const LazyVideoBackground = lazy(() => {
  return import("./../IntroBackground/IntroBackground").catch((err) =>
    console.error("Failed to load VideoBackground", err)
  );
});

const VideoLoader = ({ src }) => (
  <Suspense fallback={<Spinner />}>
    <LazyVideoBackground src={src} />
  </Suspense>
);

export const Intro = () => {
  return (
    <article id="intro" className={style.bannerContainer}>
      <VideoLoader src="assets/video.mp4" />
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
            "flex-center gap-10 button-primary button-secondary bg-fill-light"
          )}
        >
          Menu
          <span className={cx(style.icon, "material-symbols-outlined")}>
            coffee
          </span>
        </Link>
      </div>
    </article>
  );
};
