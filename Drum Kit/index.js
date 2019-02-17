
for(var i=0; i<7;i++){
  var sounds = ["tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3","snare.mp3","crash.mp3","kick-bass.mp3"];
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var text = this.textContent;
    makeSound(text);
    buttonAnimation(text);
  });
}

  var sounds = ["tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3","snare.mp3","crash.mp3","kick-bass.mp3"];
  document.addEventListener("keypress",function(event){
    var keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
  });

function makeSound(key){
  var audio = null;
  if(key == "w"){
    audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  if(key == "a"){
    audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  if(key == "s"){
    audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  if(key == "d"){
    audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
  if(key == "j"){
    audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
  if(key == "k"){
    audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
  if(key == "l"){
    audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
}

function buttonAnimation(keyPressed){
  var buttonPressed = document.querySelector("."+keyPressed);
  buttonPressed.classList.add("pressed");
  setTimeout(function(){
    buttonPressed.classList.remove("pressed");
  },100);
}
