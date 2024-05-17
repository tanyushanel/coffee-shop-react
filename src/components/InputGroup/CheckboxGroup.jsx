import { useState } from "react";
import cx from "classnames";
import style from "./InputGroup.module.scss";

export const CheckboxGroup = ({ product, onOptionChange }) => {
  const adds = product.additives;

  const [selected, setSelected] = useState(0);

  const [checkedItems, setCheckedItems] = useState(
    new Array(adds.length).fill(false)
  );

  const handleChecked = (index) => () => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];

    setCheckedItems(updatedCheckedItems);
    handleCheckboxSumValue(updatedCheckedItems);
  };

  const handleCheckboxSumValue = (arr) => {
    const checkedValues = arr
      .map((item, index) => {
        return item ? adds[index] : "";
      })
      .filter((item) => item);

    const sumValue = checkedValues.reduce(
      (sum, curr) => (sum += +curr["add-price"]),
      0
    );

    onOptionChange(sumValue);
    setSelected(sumValue);
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
            onChange={handleChecked(index)}
            checked={checkedItems[index]}
          />
          <label className="flex center gap-10" htmlFor={add.name}>
            <span className={cx(style.size, "flex center")}>{index + 1}.</span>
            <span>{add.name}</span>
          </label>
        </li>
      ))}
      {selected !== 0 && (
        <span className={cx(style.note, "caption-txt flex center")}>
          + $ {selected}
        </span>
      )}
    </ul>
  );
};
