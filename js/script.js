const feedbackButton = document.querySelector(".button-feedback");
const modalFeedbackDialog = document.querySelector(".modal-feedback");
const modalFeedbackCloseButton = modalFeedbackDialog.querySelector(".modal-close");

const mapLink = document.querySelector(".main-contacts-map a");
const modalMapDialog = document.querySelector(".modal-map");
const modalMapCloseButton = modalMapDialog.querySelector(".modal-close");


feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedbackDialog.classList.add("modal-show");
});

modalFeedbackCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedbackDialog.classList.remove("modal-show");
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMapDialog.classList.add("modal-show");
});

modalMapCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMapDialog.classList.remove("modal-show");
});


