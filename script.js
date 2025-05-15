document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".drum");

  buttons.forEach(function(button){
    button.addEventListener("click", function(){
      const sound = button.getAttribute("data-sound");
      const audio = new Audio("sounds/" + sound);
      audio.play();
      animateButton(button);
    });
  });

document.addEventListener("keydown", function(event){
    const key = event.key.toLowerCase();
    const selector = '.drum[data-key="' + key + '"]';
    const button = document.querySelector(selector);
    if (button) {
        const sound = button.getAttribute("data-sound");
        const audio = new Audio("sounds/" + sound);
        audio.play();
        animateButton(button);
    }
});

function animateButton(button) {
    const key = button.getAttribute("data-key");

    let animationClass = "";
    if (key === "a") animationClass = "pulse";
    else if (key === "s") animationClass = "rotate";
    else if (key === "d") animationClass = "shadowGlow";
    else if (key === "f") animationClass = "rotate";
    else if (key === "g") animationClass = "shadowGlow";
    else if (key === "h") animationClass = "spin";
    else if (key === "j") animationClass = "flip";
    else if (key === "k") animationClass = "zoom";
    else if (key === "l") animationClass = "shake";
    else animationClass = "pulse";

    button.classList.add(animationClass);

    setTimeout(function() {
      button.classList.remove(animationClass);
    }, 400);
  }
});
