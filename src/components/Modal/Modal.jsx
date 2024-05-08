import style from "./Modal.module.scss";
import { useModal } from "./ModalContext";

export const Modal = () => {
  const { isModalOpen, modalContent, closeModal } = useModal();
  if (!isModalOpen) return null;

  return (
    <div className={style.modalContainer}>
      {modalContent}
      <button className="button-secondary" onClick={closeModal}>
        Close
      </button>
    </div>
  );
};
