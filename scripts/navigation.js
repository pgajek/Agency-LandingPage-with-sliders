const burger = document.querySelector(".navigation__burger");
export function handleBurgerClick() {
  burger.classList.toggle("navigation__burger--active");
}
burger.addEventListener("click", handleBurgerClick);
