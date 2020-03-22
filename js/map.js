let mapLink = document.querySelector(".main-contacts-map a");
let modalMapDialog = document.querySelector(".modal-map");
let modalMapCloseButton = modalMapDialog.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMapDialog.classList.add("modal-show");
});

modalMapCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMapDialog.classList.remove("modal-show");
});

