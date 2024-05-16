import { useState } from "react";
import cx from "classnames";
import style from "./InputGroup.module.scss";

export const RadioGroup = ({ product, selectedOption, onOptionChange }) => {
  const sizes = Object.entries(product.sizes);

  const [selected, setSelected] = useState(selectedOption);

  const handleOptionChangeValue = (target) => {
    const priceForSize = sizes
      .filter((item) => item[0] === target)
      .map((item) => item[1]["add-price"]);

    onOptionChange(...priceForSize);
  };

  const handleChange = (event) => {
    const target = event.target.value;
    setSelected(target);
    handleOptionChangeValue(target);
  };

  return (
    <ul className="margin-15">
      {sizes.map((size, index) => (
        <li
          key={index}
          className={cx(
            style.button,
            "button-secondary",
            selected === size[0] ? style.active : ""
          )}
        >
          <input
            type="radio"
            id={index}
            name="size"
            value={size[0]}
            onChange={handleChange}
            hidden
            checked={selected === size[0]}
          />

          <label className="flex center gap-10" htmlFor={index}>
            <span className={cx(style.size, "flex center")}>{size[0]} </span>
            {size[1].size}
          </label>
        </li>
      ))}
      {selectedOption !== "0.00" && (
        <span className={cx(style.note, "caption-txt flex center")}>
          + $ {selectedOption}
        </span>
      )}
    </ul>
  );
};
