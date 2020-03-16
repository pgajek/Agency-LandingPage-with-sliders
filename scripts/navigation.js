const burger = document.querySelector(".navigation__burger");
const nav = document.querySelector(".navigation");
export function handleBurgerClick() {
  burger.classList.toggle("navigation__burger--active");
  nav.classList.toggle("navigation--active");
}
burger.addEventListener("click", handleBurgerClick);
