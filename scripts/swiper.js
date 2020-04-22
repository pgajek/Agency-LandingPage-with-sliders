export let isDown = false;
let startX;
let scrollLeft;
let eventX;
let walk;
const swiper = document.querySelector(".process__boxWrapper");

export const swipingStart = (e) => {
  if (e.type === "mousedown") {
    eventX = e.pageX;
  } else if (e.type === "touchstart") {
    eventX = e.touches[0].pageX;
  }

  isDown = true;
  startX = eventX - swiper.offsetLeft;
  scrollLeft = swiper.scrollLeft;
};

export const swipingMove = (e) => {
  e.preventDefault();
  if (!isDown) return;
  if (e.type === "mousemove") {
    eventX = e.pageX;
  } else if (e.type === "touchmove") {
    eventX = e.touches[0].pageX;
  }
  const x = eventX - swiper.offsetLeft;
  walk = x - startX;

  swiper.scrollLeft = scrollLeft - walk;
};
export const swipingEnd = () => {
  isDown = false;
};
export const mouseLeave = () => {
  isDown = false;
};
export const mouseUp = () => {
  isDown = false;
};
