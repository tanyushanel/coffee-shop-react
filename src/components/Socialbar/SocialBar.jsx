import style from "./SocialBar.module.scss";
import cx from "classnames";
export const SocialBar = () => {
  return (
    <div className={cx("flex social-button-container margin-40 gap-12")}>
      <button
        className={cx(style.socialButton, "flex-center button-secondary")}
      >
        <img src="/assets/icons/tweet.svg" alt="tweet-pic" />
      </button>
      <a
        href="https://www.instagram.com/resourcecoffeeshop/?hl=en"
        className={cx(style.socialButton, "flex-center button-secondary")}
      >
        <img src="/assets/icons/instagram.svg" alt="inst-pic" />
      </a>
      <button
        className={cx(style.socialButton, "flex-center button-secondary")}
      >
        <img src="/assets/icons/fb.svg" alt="fb-pic" />
      </button>
    </div>
  );
};
