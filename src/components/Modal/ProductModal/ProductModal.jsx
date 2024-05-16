import style from "./ProductModal.module.scss";
import cx from "classnames";
import { RadioGroup } from "../../InputGroup/RadioGroup";
import { useState } from "react";
import { CheckboxGroup } from "../../InputGroup/CheckboxGroup";

export const ProductModal = ({ product }) => {
  const partPriceFromRadio = product.sizes.s["add-price"];
  const [selectedRadioOption, setSelectedRadioOption] =
    useState(partPriceFromRadio);

  const [selectedCheckboxOption, setSelectedCheckboxOption] = useState(0);

  const [total, setTotal] = useState(product.price);

  const handleRadioOptionChange = (value) => {
    setSelectedRadioOption(value);
  };

  const handleCheckboxOptionChange = (value) => {
    setSelectedCheckboxOption(value);
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
            selectedOption={selectedRadioOption}
            onOptionChange={handleRadioOptionChange}
          />
        </section>
        <section>
          <h5>Additives</h5>

          <CheckboxGroup
            product={product}
            selectedOption={selectedCheckboxOption}
            onOptionChange={handleCheckboxOptionChange}
          />
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

          <h4>${total}</h4>
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
