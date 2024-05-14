import style from "./SocialBar.module.scss";
import cx from "classnames";
export const SocialBar = () => {
  return (
    <div className={cx("flex social-button-container margin-40 gap-12")}>
      <a
        href="https://twitter.com/ApexFacility"
        className={cx(style.socialButton, "flex-center button-secondary")}
      >
        <img src="assets/icons/tweet.svg" alt="tweet-pic" />
      </a>
      <a
        href="https://www.instagram.com/resourcecoffeeshop/?hl=en"
        className={cx(style.socialButton, "flex-center button-secondary")}
      >
        <img src="assets/icons/instagram.svg" alt="inst-pic" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100093654309099"
        className={cx(style.socialButton, "flex-center button-secondary")}
      >
        <img src="assets/icons/fb.svg" alt="fb-pic" />
      </a>
    </div>
  );
};
