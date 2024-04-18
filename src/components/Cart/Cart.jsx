import style from "./Cart.module.scss";

export const Cart = () => {
  return (
    <div className={style.shopBox}>
      <span className="material-symbols-outlined">account_circle</span>
      <span className="material-symbols-outlined">shopping_cart</span>
    </div>
  );
};
