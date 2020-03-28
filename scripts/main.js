import Slider from "./slider.js";
import {
  CheckNavPosition,
  HandleBurgerClick,
  HandleNavLinkClick
} from "./navigation.js";

const burger = document.querySelector(".navigation__burger");
const nav = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation__link");

window.addEventListener("scroll", () => CheckNavPosition(nav));
burger.addEventListener("click", () => HandleBurgerClick(nav, burger));
navLinks.forEach(link =>
  link.addEventListener("click", () => HandleNavLinkClick(nav, burger))
);
const TeamSlider = new Slider(".team__slide", true);
