import style from "./ProductModal.module.scss";
import cx from "classnames";

export const ProductModal = ({ product }) => {
  return (
    <div className="flex gap-20">
      <div className={style.productImg}>
        <img className={style.scalable} src={product.src} alt="img" />
      </div>

      <div className={cx(style.productDesc, "flex gap-20")}>
        <h4 className="modal-title ">{product.name}</h4>
        <p className="modal-desc ">{product.description}</p>
        <section>
          <h5>Size</h5>
          <ul className="margin-15">
            <li className={cx(style.button, "button-secondary")}>
              <span className={cx(style.button)}>S</span>
              <span>{product.sizes.s.size}</span>
            </li>
            <li className={cx(style.button, "button-secondary")}>
              <span className={cx(style.button)}>M</span>
              <span>{product.sizes.m.size}</span>
            </li>
            <li className={cx(style.button, "button-secondary")}>
              <span className={cx(style.button)}>L</span>
              <span>{product.sizes.l.size}</span>
            </li>
          </ul>
        </section>
        <section>
          <h5>Additives</h5>
          <ul className="margin-15">
            <li className={cx(style.button, "button-secondary")}>
              <span>{product.additives[0].name}</span>
            </li>
            <li className={cx(style.button, "button-secondary")}>
              <span>{product.additives[1].name}</span>
            </li>
            <li className={cx(style.button, "button-secondary")}>
              <span>{product.additives[2].name}</span>
            </li>
          </ul>
        </section>
        <section className="flex flex-between">
          <h4>Total:</h4>
          <div className={style.addCart}>
            <span
              className={cx(
                style.button,
                "material-symbols-outlined button-secondary"
              )}
            >
              shopping_cart
            </span>
          </div>

          <h4>$4.5</h4>
        </section>
        <section className="flex gap-8 caption-txt">
          <span className="material-symbols-outlined">info</span>
          <span>
            The cost is not final. Download our mobile app to see the final
            price and place your order. Earn loyalty points and enjoy your
            favorite coffee with up to 20% discount.
          </span>
        </section>
      </div>
    </div>
  );
};
