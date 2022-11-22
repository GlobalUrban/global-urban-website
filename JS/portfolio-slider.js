const portfolioBtn = document.getElementsByClassName("portfolio-btn");
const portfolioBtnFocused = document.getElementById("portfolio-focused");
const slider = document.getElementById("slider");



portfolioBtn[0].addEventListener('click', () => {
    slider.style = `margin-left: 0%`;
})



portfolioBtn[1].addEventListener('click', () => {
portfolioBtnFocused.classList.remove("portfolio-focused")
portfolioBtnFocused.classList.add("portfolio-color-blue");
slider.style = `margin-left: -100%`;
})