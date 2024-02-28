document.addEventListener('DOMContentLoaded', function() {
    // Select all .card and .schoolcard elements
    var cards = document.querySelectorAll('.card, .schoolcard');
    
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        // Check if the clicked card is already "tapped"
        var isTapped = card.classList.contains('is-tapped');
        
        // First, remove 'is-tapped' from all cards to reset the state
        cards.forEach(function(c) {
          c.classList.remove('is-tapped');
        });
        
        // If the clicked card was not already "tapped", add the class
        if (!isTapped) {
          card.classList.add('is-tapped');
        }
      });
    });
    
    // Optional: Close the card when clicking outside of it
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.card, .schoolcard')) {
        cards.forEach(function(card) {
          card.classList.remove('is-tapped');
        });
      }
    });
  });  