const chipForm = document.querySelector(".form-chip");
const chipList = document.querySelector(".chip-list");

const createChip = (value) => {
  const chip = document.createElement("div");
  chip.classList.add("chip", "dark-gray-hover");
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fas", "fa-times-circle");
  closeIcon.addEventListener("click", () => {
    chipList.removeChild(chip);
  });
  chip.innerText = value;
  chip.appendChild(closeIcon);
  return chip;
};

chipForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const chip = createChip(e.target.elements[0].value);
  console.log(chipList);
  chipList.appendChild(chip);
  e.target.elements[0].value = "";
});
