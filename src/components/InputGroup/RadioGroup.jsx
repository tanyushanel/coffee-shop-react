import { useState } from "react";
import cx from "classnames";
import style from "./InputGroup.module.scss";

export const RadioGroup = ({ product }) => {
  const sizes = Object.entries(product.sizes);

  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
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
          <label htmlFor={index}>
            <span className={style.size}>{size[0]} </span>
            {size[1].size}
          </label>
        </li>
      ))}
    </ul>
  );
};
