const cardArray = [
  {
    name: 'frise',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'frise',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
let cardsChosen = [];
let cardsWon = [];
let cardsChosenId = [];

function createBoard() {
  for (let i=0; i<cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll('img');
  const resultDisplay = document.querySelector('#result');
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  console.log('check for match')
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    alert('You have clicked the same image!');
  }else if (cardsChosen[0] == cardsChosen[1]) {
    alert('You found a match');
    cards[optionOneId].setAttribute('src', 'images/white.png');
    cards[optionTwoId].setAttribute('src', 'images/white.png');
    cards[optionOneId].removeEventListener('click', flipCard);
    cards[optionTwoId].removeEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  }else {
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    alert('Sory try again!')
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenId = [];

  if (cardsWon.length == cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations you found them all!';
  }
}

function flipCard() {
  
  const cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
