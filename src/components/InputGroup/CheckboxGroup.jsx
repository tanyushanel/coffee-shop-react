import { useState } from "react";
import cx from "classnames";
import style from "./InputGroup.module.scss";

export const CheckboxGroup = ({ product }) => {
  const adds = product.additives;

  const [checkedItems, setCheckedItems] = useState(
    new Array(adds.length).fill(false)
  );

  const handleCheck = (index) => () => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <ul className="margin-15">
      {adds.map((add, index) => (
        <li
          key={index}
          className={cx(style.button, "button-secondary", {
            [style.active]: checkedItems[index],
          })}
        >
          <input
            type="checkbox"
            id={add.name}
            name="adds"
            value={index}
            hidden
            onChange={handleCheck(index)}
            checked={checkedItems[index]}
          />
          <label className="flex center gap-10" htmlFor={add.name}>
            <span className={cx(style.size, "flex center")}>{index + 1}.</span>
            <span>{add.name}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
