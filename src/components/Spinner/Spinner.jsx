import style from "./Spinner.module.scss";

export const Spinner = () => (
  <svg
    style={style}
    width="50"
    height="50"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle style={style} cx="25" cy="25" r="20" strokeWidth="4" fill="none" />
  </svg>
);
