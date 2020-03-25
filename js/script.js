const feedbackButton = document.querySelector(".button-feedback");
const modalFeedbackDialog = document.querySelector(".modal-feedback");

const mapLink = document.querySelector(".main-contacts-map a");
const modalMapDialog = document.querySelector(".modal-map");

const itemButtonBuyList = document.querySelectorAll(".item-button-buy");
const modalAddToBasketDialog = document.querySelector(".modal-add-basket");

const modalCloseButtonList = document.querySelectorAll(".modal-close");

if (feedbackButton) {
  feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedbackDialog.classList.add("modal-show");
  });
}

if (mapLink) {
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMapDialog.classList.add("modal-show");
  });
}

for (let i = 0; i < itemButtonBuyList.length; i++) {
  itemButtonBuyList[i].addEventListener("click", function (evt) {
    console.log("click on " + itemButtonBuyList[i]);
    evt.preventDefault();
    modalAddToBasketDialog.classList.add("modal-show");
  });
}

for (let i = 0; i < modalCloseButtonList.length; i++) {
  modalCloseButtonList[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    this.parentNode.classList.remove("modal-show");
  })
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    const popup = document.querySelector(".modal-show");
    if (popup) {
      popup.classList.remove("modal-show");
    }
  }
});
