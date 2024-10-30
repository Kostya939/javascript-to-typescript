
import { ModalElements } from "../types/modal.types";

const modalElements: ModalElements = {
    modal: document.getElementById("modal") as HTMLElement,
    openModalButton: document.getElementById("openModal") as HTMLButtonElement,
    closeModalButton: document.getElementById("closeModal") as HTMLButtonElement,
};

export function openModal() {
    modalElements.modal.style.display = "block";
}

export function closeModal() {
    modalElements.modal.style.display = "none";
}

modalElements.openModalButton.addEventListener("click", openModal);
modalElements.closeModalButton.addEventListener("click", closeModal);
