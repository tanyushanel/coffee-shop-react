import style from "./Modal.module.scss";
import { useModal } from "./ModalContext";
import FocusTrap from "focus-trap-react";
import { useEffect } from "react";

export const Modal = () => {
  const { isModalOpen, modalContent, closeModal } = useModal();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <FocusTrap active={isModalOpen} onClick={(e) => e.stopPropagation()}>
      <div className={style.overlay}>
        <div className={style.modalContainer}>
          {modalContent}
          <button className="button-secondary" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </FocusTrap>
  );
};
