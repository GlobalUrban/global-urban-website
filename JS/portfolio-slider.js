const portfolioBtn = document.getElementsByClassName("portfolio-btn");
const portfolioBtnFocused = document.getElementById("portfolio-focused")

console.log(portfolioBtn);
portfolioBtn[1].addEventListener('click', () => {
portfolioBtnFocused.classList.remove("portfolio-focused")
portfolioBtnFocused.classList.add("portfolio-color-blue");
console.log("a")
})