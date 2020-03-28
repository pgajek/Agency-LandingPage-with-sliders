export default class Slider {
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
      slide.setAttribute("aria-hidden", true);
    });
    let nextSlideIndex = slideIndex + 1;
    console.log(nextSlideIndex);
    let prevSlideIndex = slideIndex - 1;
    console.log(prevSlideIndex);
    if (slideIndex == 0) {
      prevSlideIndex = this.slides.length - 1;
    } else if (slideIndex == this.slides.length - 1) {
      nextSlideIndex = 0;
    }

    this.slides[nextSlideIndex].classList.add("team__member--right");
    this.slides[prevSlideIndex].classList.add("team__member--left");
    this.slides[slideIndex].classList.add("team__member--active");
    this.slides[slideIndex].setAttribute("aria-hidden", false);

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
