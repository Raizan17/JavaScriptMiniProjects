const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById('btn');

const color = document.querySelector(".color");

// select one of the colors from the array above



button.addEventListener('click', function changeColor(){

  // get Random number between 0 and 3
  const randomNumber = GetRandomNumber();

  // change color of background
  document.body.style.backgroundColor = colors[randomNumber];

  // change text of color 

  color.textContent = colors[randomNumber];;
});



function GetRandomNumber(){

  // code to get random number between 0 and 3

  return Math.floor(Math.random() * 3) + 0;
}
