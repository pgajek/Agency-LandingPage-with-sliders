export function HandleBurgerClick(nav, burger) {
  burger.classList.toggle("navigation__burger--active");
  nav.classList.toggle("navigation--active");
}

export function CheckNavPosition(nav) {
  const section = document.querySelector(".aboutUs");
  let Break = section.getBoundingClientRect().top;
  if (Break <= 0) {
    nav.classList.add("navigation--bgc");
  } else {
    nav.classList.remove("navigation--bgc");
  }
}
