var image1 = Math.floor(Math.random()*6)+1;
var image2 = Math.floor(Math.random()*6)+1;
var imagePath1 = "images/dice"+image1+".png";
var imagePath2 = "images/dice"+image2+".png";

document.querySelector(".img1").setAttribute("src",imagePath1);
document.querySelector(".img2").setAttribute("src",imagePath2);

if(image1>image2){
  document.querySelector("h1").textContent = "🚩 Palyer 1 Wins!!";
}
else if (image2 > image1){
  document.querySelector("h1").textContent = "Palyer 2 Wins 🚩!!";
}
else{
  document.querySelector("h1").textContent = "Draw!!";
}
