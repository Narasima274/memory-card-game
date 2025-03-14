document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'vegeta',
      img: 'images/vegeta1.png'
    },
    {
      name: 'breeus',
      img: 'images/breeus1.png'
    },
    {
      name: 'freeza',
      img: 'images/freeza1.png'
    },
    {
      name: 'booo',
      img: 'images/booo1.png'
    },
    {
      name: 'goku',
      img: 'images/goku1.png'
    },
    {
      name: 'gohan',
      img: 'images/gohan1.png'
    },
    {
      name: 'vegeta',
      img: 'images/vegeta1.png'
    },
    {
      name: 'breeus',
      img: 'images/breeus1.png'
    },
    {
      name: 'freeza',
      img: 'images/freeza1.png'
    },
    {
      name: 'booo',
      img: 'images/booo1.png'
    },
    {
      name: 'goku',
      img: 'images/goku1.png'
    },
    {
      name: 'gohan',
      img: 'images/gohan1.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  const restartButton = document.getElementById('restart')
  const restartContainer = restartButton.parentElement;
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    grid.innerHTML = '';
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.setAttribute('alt', ``)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
    grid.style.display = "grid";
    restartButton.style.display = "none"; 
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length

    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
      grid.style.display = "none";
      restartButton.style.display = "block";
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  restartButton.addEventListener('click', () => {
    cardsWon = [];
    resultDisplay.textContent = '',
    createBoard();
  })

})
