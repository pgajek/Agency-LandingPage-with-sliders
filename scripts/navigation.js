const burger = document.querySelector(".navigation__burger");
const nav = document.querySelector(".navigation");
export function handleBurgerClick() {
  burger.classList.toggle("navigation__burger--active");
  nav.classList.toggle("navigation--active");
}
burger.addEventListener("click", handleBurgerClick);

function CheckNavPosition() {
  const section = document.querySelector(".aboutUs");
  let Break = section.getBoundingClientRect().top;
  console.log(Break, window.innerHeight);
  if (Break <= 0) {
    console.log("yes");
    nav.classList.add("navigation--bgc");
  } else {
    nav.classList.remove("navigation--bgc");
  }
}

window.addEventListener("scroll", CheckNavPosition);
