confirm ('You want to see our Portfolio ?');
prompt ("Are you sure ?" )

let currentRating = 0;

  function setRating(rating) {
    currentRating = rating;
    highlightStars(rating);
    displayRatingMessage(rating);
  }

  function highlightStars(rating) {
    const stars = document.querySelectorAll('.stars');
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add('checked');
      } else {
        star.classList.remove('checked');
      }
    });
  }

  function displayRatingMessage(rating) {
    const message = document.getElementById('ratingMessage');
    message.textContent = `You rated ${rating} out of 5 stars.`;
  }

