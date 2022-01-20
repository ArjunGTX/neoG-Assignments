const setShowDialog = (btn, dialog) => {
  btn.addEventListener("click", () => dialog.classList.add("show-dialog"));
};

const setHideDialog = (btnList, dialog) => {
  btnList.forEach((btn) => {
    btn.addEventListener("click", () => dialog.classList.remove("show-dialog"));
  });
};

const alertBtn = document.querySelector(".btn-alert");
const actionBtnList = document.querySelectorAll(".btn-action-alert");
const alert = document.querySelector(".alert");
setShowDialog(alertBtn, alert);
setHideDialog(actionBtnList, alert);

const simpleBtn = document.querySelector(".btn-simple");
const simpleBtnList = document.querySelectorAll(".btn-action-simple");
const simple = document.querySelector(".simple");
setShowDialog(simpleBtn, simple);
setHideDialog(simpleBtnList, simple);

const confirmBtn = document.querySelector(".btn-confirm");
const confirmBtnList = document.querySelectorAll(".btn-action-confirm");
const confirm = document.querySelector(".confirm");
setShowDialog(confirmBtn, confirm);
setHideDialog(confirmBtnList, confirm);
