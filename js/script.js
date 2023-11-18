document.addEventListener('DOMContentLoaded', () => {
    const icons = ['fa-square', 'fa-square', 'fa-star', 'fa-star', 'fa-play', 'fa-play', 'fa-circle', 'fa-circle',
      'fa-home', 'fa-home', 'fa-times', 'fa-times', 'fa-heart', 'fa-heart', 'fa-gem', 'fa-gem',
      'fa-certificate', 'fa-certificate', 'fa-arrow-up', 'fa-arrow-up'];
  
    let flippedCards = [];
    let matchedCards = [];
  
    const memoryGame = document.querySelector('.memory-game');
  
    // Shuffle function to randomize card order
    const shuffleIcons = () => {
      icons.sort(() => Math.random() - 0.5);
    };
  
    // Function to create the card elements
    const createCard = (icon) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.icon = icon;
  
      const iconElement = document.createElement('i');
      iconElement.classList.add('fa', icon);
  
      card.appendChild(iconElement);
  
      card.addEventListener('click', flipCard);
      memoryGame.appendChild(card);
    };
  
    // Function to handle card flipping
    const flipCard = (event) => {
      const selectedCard = event.currentTarget;
  
      if (!selectedCard.classList.contains('flipped') && flippedCards.length < 2) {
        selectedCard.classList.add('flipped');
        flippedCards.push(selectedCard);
  
        if (flippedCards.length === 2) {
          setTimeout(checkMatch, 500);
        }
      }
    };

      // Function to show the modal
  const showModal = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  };

  // Function to close the modal
  window.closeModal = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  };
  
    // Function to check if flipped cards match
    const checkMatch = () => {
      const [card1, card2] = flippedCards;
  
      if (card1.dataset.icon === card2.dataset.icon) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1, card2);
  
        if (matchedCards.length === icons.length) {
          showModal();
          resetGame();
        }
      } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
      }
  
      flippedCards = [];
    };
  
    // Function to reset the game
    const resetGame = () => {
      memoryGame.innerHTML = '';
      matchedCards = [];
      flippedCards = [];
      startGame();
    };
  
    // Function to start the game
    const startGame = () => {
      shuffleIcons();
      icons.forEach(createCard);
    };
  
    // Initialize the game
    startGame();
  });
  
  