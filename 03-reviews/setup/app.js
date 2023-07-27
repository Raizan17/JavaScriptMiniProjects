// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];


// getting the placesholders for the places of img author job and info on the dom
const img = document.getElementById("person-img");
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

// getting placeholder for the prev and next buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// getting random button:
const randombutton = document.querySelector('.random-btn');
// setting current element in array
let currentElement = 0;
let randomNum = 0;

// when window loads but DOM first time:

window.addEventListener('DOMContentLoaded', function(){

  ShowPerson(currentElement);
})

function ShowPerson(currentElement) {

  img.src = reviews[currentElement].img;
  author.textContent = reviews[currentElement].name;
  job.textContent = reviews[currentElement].job;
  info.textContent = reviews[currentElement].text;
}


// when Next button is pressed

nextBtn.addEventListener('click', function() {

  currentElement++;
  if(currentElement > 3){
    currentElement = 0;
  }

  ShowPerson(currentElement);
})

// when Prev button is pressed

prevBtn.addEventListener('click', function() {

  currentElement--;
  if(currentElement < 0){
    currentElement = 3;
  }

  ShowPerson(currentElement);
})

// when random button is selected:
randombutton.addEventListener('click', function() {

  // code to get random number between 0 and 4
  randomNum = Math.floor(Math.random() * 4) + 0;
  console.log(randomNum);
  currentElement = randomNum;
  ShowPerson(currentElement);
})












