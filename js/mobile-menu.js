(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mob-menu__menu-btn"),
    closeMenuBtn: document.querySelector(".mob-menu__close-btn"),
    modal: document.querySelector(".mob-menu__modal"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();