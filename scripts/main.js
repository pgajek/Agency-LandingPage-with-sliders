import Slider from "./slider.js";
import { CheckNavPosition, HandleBurgerClick } from "./navigation.js";

const burger = document.querySelector(".navigation__burger");
const nav = document.querySelector(".navigation");

window.addEventListener("scroll", () => CheckNavPosition(nav));
burger.addEventListener("click", () => HandleBurgerClick(nav, burger));

const TeamSlider = new Slider(".team__slide", true);
