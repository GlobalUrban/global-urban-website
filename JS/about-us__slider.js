const slider = document.getElementById("slider");
const slides = 3;
var slide = true;



window.addEventListener("load", Slider());

function Slider() {
  let a = 100;
  setInterval(() => {
    slider.style = `margin-left: -${a}%`;
    a += 100;
    console.log(a);
    a = a == 200? 0 : a;
  }, 7000);
}



// Slider 2 
const slider2 = document.getElementById("slider2");
const slides2 = 3;
var slide2 = true;

window.addEventListener("load", Slider2());


function Slider2() {
    let a = 100;
    setInterval(() => {
      slider2.style = `margin-left: -${a}%`;
      a += 100;
      console.log(a);
      a = a == 300? 0 : a;
    }, 6500);
  }