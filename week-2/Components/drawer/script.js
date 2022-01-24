const nestBtn = document.querySelector(".btn-nest");
const nestedItems = document.querySelector(".nested-items");

const btnDismiss = document.querySelector(".btn-dismiss");
const drawerDismiss = document.querySelector(".drawer-dismiss");

const drawerModal = document.querySelector(".drawer-modal");
const btnModal = document.querySelector(".btn-modal");

const modal = document.querySelector(".modal");

nestBtn.addEventListener("click", () =>
  nestedItems.classList.toggle("show-items")
);

btnDismiss.addEventListener("click", () =>
  drawerDismiss.classList.toggle("hide-menu")
);

btnModal.addEventListener("click", (e) => {
  e.stopPropagation();
  drawerModal.classList.toggle("hide-menu");
  modal.classList.add("blur-main");
  modal.addEventListener("click", () => {
    console.log("main");
    drawerModal.classList.add("hide-menu");
    modal.classList.remove("blur-main");
  });
});
