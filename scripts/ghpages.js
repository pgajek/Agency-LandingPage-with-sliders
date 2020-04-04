class Slider {
  constructor(elemSelector, activeClass, nextClass, previousClass) {
    this.currentSlide = 0;
    this.sliderSelector = elemSelector;
    this.sliderElem = null;
    this.slider = null;
    this.slides = null;
    this.arrowLeft = null;
    this.arrowRight = null;
    this.generateSlider();
    this.changeSlide(this.currentSlide);
    this.slideActiveClass = activeClass;
    this.previousSlideClass = previousClass;
    this.nextSlideClass = nextClass;
  }
  changeSlide(slideIndex) {
    this.slides.forEach(slide => {
      slide.classList.remove("team__member--active");
      slide.classList.remove("team__member--left");
      slide.classList.remove("team__member--right");
      slide.classList.remove("team__member--behind");
      slide.setAttribute("aria-hidden", true);
    });

    let nextSlideIndex = slideIndex + 1;
    let prevSlideIndex = slideIndex - 1;
    if (slideIndex == 0) {
      prevSlideIndex = this.slides.length - 1;
    } else if (slideIndex == this.slides.length - 1) {
      nextSlideIndex = 0;
    }
    const filteredSlides = [...this.slides].filter(
      item =>
        item != this.slides[slideIndex] &&
        item != this.slides[nextSlideIndex] &&
        item != this.slides[prevSlideIndex]
    );
    filteredSlides.forEach(slide =>
      slide.classList.add("team__member--behind")
    );

    this.slides[nextSlideIndex].classList.add("team__member--right");
    this.slides[prevSlideIndex].classList.add("team__member--left");
    this.slides[slideIndex].classList.add("team__member--active");
    this.slides[slideIndex].setAttribute("aria-hidden", false);
    //wyjatki jak np 0 -1 = undefined
    this.currentSlide = slideIndex;
  }
  nextSlide() {
    this.currentSlide++;
    if (this.currentSlide > this.slides.length - 1) {
      this.currentSlide = 0;
    }
    this.changeSlide(this.currentSlide);
  }
  previousSlide() {
    this.currentSlide--;
    if (this.currentSlide < 0) {
      this.currentSlide = this.slides.length - 1;
    }
    this.changeSlide(this.currentSlide);
  }
  createButtons() {
    this.arrowLeft = document.createElement("button");
    this.arrowLeft.type = "button";
    this.arrowLeft.classList.add("team__arrow");
    this.arrowLeft.classList.add("team__arrow--arrowLeft");
    this.arrowLeft.addEventListener("click", () => this.previousSlide());

    this.arrowRight = document.createElement("button");
    this.arrowRight.type = "button";
    this.arrowRight.classList.add("team__arrow");
    this.arrowRight.classList.add("team__arrow--arrowRight");
    this.arrowRight.addEventListener("click", () => this.nextSlide());

    this.slider.appendChild(this.arrowLeft);
    this.slider.appendChild(this.arrowRight);
  }
  generateSlider() {
    this.slider = document.querySelector(this.sliderSelector);

    const sliderWrapper = document.createElement("div");
    sliderWrapper.classList.add("team__sliderWrapper");

    this.slides = this.slider.children;

    while (this.slides.length) {
      sliderWrapper.appendChild(this.slides[0]);
    }
    this.slides = sliderWrapper.querySelectorAll(".team__member");
    this.slider.appendChild(sliderWrapper);
    this.createButtons();
  }
}

const burger = document.querySelector(".navigation__burger");
const nav = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation__link");

window.addEventListener("scroll", () => CheckNavPosition(nav));
burger.addEventListener("click", () => HandleBurgerClick(nav, burger));
navLinks.forEach(link =>
  link.addEventListener("click", () => HandleNavLinkClick(nav, burger))
);
const TeamSlider = new Slider(".team__slide", true);

const smallClients = document.querySelectorAll(".clients__client--small");
const allItems = document.querySelectorAll("[data-client]");

for (const client of smallClients) {
  client.addEventListener("click", e =>
    ChangeClient(e, smallClients, allItems)
  );
}

function ChangeClient(e, smallClients, allItems) {
  const clientNode = e.target.closest("[data-client]");

  const chosenItems = [...allItems].filter(
    item => item.dataset.client == clientNode.dataset.client
  );
  const restItems = [...allItems].filter(item => {
    if (item.classList.contains("clients__client--small")) {
      return null;
    } else {
      return item;
    }
  });
  restItems.forEach(item => {
    item.classList.add("opacity--none");
    item.classList.remove("comeFromRight");
    item.classList.remove("comeFromRightRotate");
  });
  chosenItems.forEach(item => {
    item.classList.add("opacity--full");
    if (!item.classList.contains("rectangleImage")) {
      item.classList.add("comeFromRight");
    } else {
      item.classList.add("comeFromRightRotate");
    }
    item.classList.remove("opacity--none");
  });
  smallClients.forEach(item => (item.style.boxShadow = "none"));
  clientNode.style.boxShadow = "-2px 6px 40px #bc2e3a";
}
function HandleBurgerClick(nav, burger) {
  burger.classList.toggle("navigation__burger--active");
  nav.classList.toggle("navigation--active");
}

function CheckNavPosition(nav) {
  const section = document.querySelector(".aboutUs");
  let Break = section.getBoundingClientRect().top;
  if (Break <= 0) {
    nav.classList.add("navigation--bgc");
  } else {
    nav.classList.remove("navigation--bgc");
  }
}
function HandleNavLinkClick(nav, burger) {
  nav.classList.remove("navigation--active");
  burger.classList.remove("navigation__burger--active");
}
