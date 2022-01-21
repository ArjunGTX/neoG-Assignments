const hideBtn = document.querySelector(".btn-hide");
const badge = hideBtn.firstElementChild;

hideBtn.addEventListener("click", () => badge.classList.toggle("hide"));
