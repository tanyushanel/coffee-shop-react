import style from "./IntroBackground.module.scss";

const IntroBackground = ({ src }) => {
  return (
    <video className={style.video} autoPlay loop muted preload="auto">
      <source src={src} type="video/mp4"></source>
    </video>
  );
};
export default IntroBackground;
