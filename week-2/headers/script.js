const stickyContainerList = document.querySelectorAll(".sticky-container");
const stickyHeaderList = document.querySelectorAll(".standard");
const disabledList = document.querySelectorAll(".disabled");
const shortHeader = document.querySelector(".short");
const shortContainer = document.querySelector(".short-container");

let prevTop = 0;

stickyContainerList.forEach((container) => {
  container.addEventListener("scroll", (e) => {
    if (e.target.scrollTop > prevTop) {
      stickyHeaderList.forEach((header) => header.classList.remove("sticky"));
    } else {
      stickyHeaderList.forEach((header) => header.classList.add("sticky"));
    }
    prevTop = e.target.scrollTop;
  });
});

shortContainer.addEventListener("scroll", (e) => {
  if (e.target.scrollTop === 0) {
    shortHeader.classList.remove("collapse");
    disabledList.forEach((element) => element.classList.remove("hide"));
  } else {
    shortHeader.classList.add("collapse");
    disabledList.forEach((element) => element.classList.add("hide"));
  }
});
