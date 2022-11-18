const mobileSlider = document.getElementById("mobileSlider");
let mobileSlides = 6;

window.addEventListener("load", MobileSlider());

function MobileSlider() {
  let a = 100;
  let amountSlides = mobileSlides * a;

  setInterval(() => {
    mobileSlider.style = `margin-left: -${a}%`;
    a += 100;

    a = a == amountSlides? 0 : a;
  }, 5000);
}

const mobileSlider2 = document.getElementById("mobileSlider2");
let mobileSlides2 = 11;

window.addEventListener("load", MobileSlider2());

function MobileSlider2() {
  let a = 100;
  let amountSlides2 = mobileSlides2 * a;

  setInterval(() => {
    mobileSlider2.style = `margin-left: -${a}%`;
    a += 100;

    a = a == amountSlides2? 0 : a;
  }, 6000);
}
