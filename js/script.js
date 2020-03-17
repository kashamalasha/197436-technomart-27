let feedbackButton = document.querySelector(".button-feedback");
let modalFeedbackDialog = document.querySelector(".modal-feedback");
let modalFeedbackCloseButton = modalFeedbackDialog.querySelector(".modal-close");

let mapLink = document.querySelector(".main-contacts-map a");
let modalMapDialog = document.querySelector(".modal-map");
let modalMapCloseButton = modalMapDialog.querySelector(".modal-close");

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedbackDialog.classList.add("modal-show");
});

modalFeedbackCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedbackDialog.classList.remove("modal-show");
})

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMapDialog.classList.add("modal-show");
});

modalMapCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMapDialog.classList.remove("modal-show");
});

function mapError() {
  modalMapDialog.querySelector("iframe").setAttribute("style", "display: none;");
  modalMapDialog.querySelector("img").setAttribute("style", "display: block;");
}
