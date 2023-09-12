const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');
const buttonRightWhy = document.getElementById('slideRight-why');
const buttonLeftWhy = document.getElementById('slideLeft-why');

buttonRight.onclick = function () {
  document.getElementById('testi').scroll({
    left: 1000,
    top: 1000,
    behavior: 'smooth'
})
};

buttonLeft.onclick = function () {
  document.getElementById('testi').scroll({
    left: 0,
    top: 0,
    behavior: 'smooth'
})
};

buttonRightWhy.onclick = function () {
    document.getElementById('why').scroll({
        left: 2000,
        top: 2000,
        behavior: 'smooth'
    })
  };
  buttonLeftWhy.onclick = function () {
    document.getElementById('why').scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
  };

// Set the date we're counting down to
var countDownDate = new Date("October 22, 2023 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + " T  " + hours + " S "
  + minutes + " M " + seconds + " S";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Bewerbungen geschlossen.";
  }
}, 1000);

