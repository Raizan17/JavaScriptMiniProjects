const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById('btn');

const color = document.querySelector(".color");

// select a random mix of numbers

button.addEventListener('click', function changeHexColor(){
  
  let hexColor='#';

  // loop 6 times because hex color has 6 digits;
  for(let i=0; i < 6; i++){
    const randomNumber = getRandomHexNumber();
    console.log(randomNumber);
    hexColor += hex[randomNumber];
   // console.log();
    
  }
  // change color of background
  document.body.style.backgroundColor = hexColor;

  // change text of color 

  color.textContent = hexColor;
});

function getRandomHexNumber(){

  // gives random number within length of hex array
  return Math.floor(Math.random() * hex.length);

}

