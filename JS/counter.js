const footerTop = document.querySelector("#footer-top");

// window.addEventListener("scroll", () => {
//   TriggerNumAnimation();
// });




// function TriggerNumAnimation() {
//   const footerTopRect = footerTop.getBoundingClientRect();
//   console.log(footerTopRect)
//   if (footerTopRect.bottom < 1400) {
//     NumAnimation();
//   }
// }

function NumAnimation() {
    let days = setInterval(numDays, 0.00000000001);
    let coffe = setInterval(numCoffe, 0.02);
    let clients = setInterval(numClients, 50);
    
    let count1 = 1;
    let count2 = 1;
    let count3 = 1;
    
    function numDays() {
      count1++;
      document.querySelector("#days").innerHTML = count1.toLocaleString();
      if (count1 == 2435) {
        clearInterval(days);
      }
    }
    
    function numCoffe() {
      count2++;
      document.querySelector("#coffe").innerHTML = count2.toLocaleString();
      if (count2 == 39420) {
        clearInterval(coffe);
      }
    }
    
    function numClients() {
      count3++;
      document.querySelector("#clients").innerHTML = count3 + " " + "+";
      if (count3 == 150) {
        clearInterval(clients);
      }
    }

}

NumAnimation()


