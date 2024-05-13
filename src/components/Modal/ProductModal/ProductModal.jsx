import style from "./ProductModal.module.scss";
import cx from "classnames";
import { RadioGroup } from "../../InputGroup/RadioGroup";
import { useState } from "react";
import { CheckboxGroup } from "../../InputGroup/CheckboxGroup";

export const ProductModal = ({ product }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    console.log(selectedOption);
  };
  return (
    <div className="flex gap-20">
      <div className={style.productImg}>
        <img className={style.scalable} src={product.src} alt="img" />
      </div>

      <div className={cx(style.productDesc, "flex gap-20")}>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <section>
          <h5>Size</h5>
          <RadioGroup
            product={product}
            selected={selectedOption}
            onOptionChange={handleOptionChange}
          />
          <div>Selected Option: {selectedOption}</div>
        </section>
        <section>
          <h5>Additives</h5>
          <CheckboxGroup product={product} />
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
