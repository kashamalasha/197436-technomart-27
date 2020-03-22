let feedbackButton = document.querySelector(".button-feedback");
let modalFeedbackDialog = document.querySelector(".modal-feedback");
let modalFeedbackCloseButton = modalFeedbackDialog.querySelector(".modal-close");

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedbackDialog.classList.add("modal-show");
});

modalFeedbackCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedbackDialog.classList.remove("modal-show");
});

