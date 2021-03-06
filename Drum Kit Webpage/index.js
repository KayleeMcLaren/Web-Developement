// Detecting Mouse Click

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}


// Detecting Keyboard Press

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case key = "w":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    case key = "a":
      var kick = new Audio("kick-bass.mp3");
      kick.play();
      break;

    case key = "s":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case key = "d":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case key = "j":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case key = "k":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case key = "l":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log();
  }
}


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
