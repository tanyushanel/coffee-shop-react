import cx from "classnames";
import { useModal } from "../../../Modal/ModalContext";
import { ProductModal } from "../../../Modal/ProductModal/ProductModal";
import style from "./GridItem.module.scss";

export const GridItem = ({ item }) => {
  const { openModal } = useModal();

  return (
    <>
      <li
        className={style.gridContainer}
        onClick={() => openModal(<ProductModal product={item} />)}
      >
        <div className={style.gridImg}>
          <img className={style.scalable} src={item.src} alt="pic" />
        </div>
        <div className={cx(style.gridDesc, "margin-20 flex-center gap-12")}>
          <h4>{item.name}</h4>
          <p className="medium-txt cut">{item.description}</p>
          <h4 className="price">${item.price}</h4>
        </div>
      </li>
    </>
  );
};
