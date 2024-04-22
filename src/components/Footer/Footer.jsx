import { SocialBar } from "../Socialbar/SocialBar";
import style from "./Footer.module.scss";

import cx from "classnames";

export const Footer = () => {
  return (
    <footer
      className={cx(
        style.footer,
        "flex-wrap bg-fill-dark light-color margin-100"
      )}
    >
      <article id="contact" className={style.contactHeading}>
        <h3 className="light-color">
          Sip, Savor, Smile.
          <span className="accent-txt"> It’s coffee time! </span>
        </h3>
        <SocialBar />
        <div className={style.contactsDesc}>
          <h4 className="margin-30">Contact us</h4>

          <ul className="margin-40">
            <li className="flex margin-20 gap-10">
              <img src="assets/icons/location.svg" alt="loc-icon" />
              <a
                className="medium-txt"
                href="https://www.google.com/maps/search/8558+Green+Rd.,+LA"
                target="blank"
              >
                8558 Green Rd., LA
              </a>
            </li>

            <li className="flex margin-20 gap-10">
              <img src="assets/icons/phone-icon.svg" alt="phone-icon" />
              <a className="medium-txt" href="tel:1(603)555-0123">
                +1 (603) 555-0123
              </a>
            </li>

            <li className="flex margin-20 gap-10">
              <img src="assets/icons/clock.svg" alt="clock-icon" />
              <span className="medium-txt">Mon-Sat: 9:00 AM – 23:00 PM</span>
            </li>
          </ul>
        </div>
      </article>
    </footer>
  );
};
