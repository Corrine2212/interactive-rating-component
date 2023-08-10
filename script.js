document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.querySelector(".card");
    const thanksContainer = document.querySelector(".ty-card");
    const submitButton = document.querySelector(".card__submit-btn");
    const ratings = document.querySelectorAll(".icon-wrapper");
    const actualRating = document.getElementById("rating");
  
    ratings.forEach((rating) => {
      rating.addEventListener("click", () => {
        // Remove highlight from all ratings
        ratings.forEach((r) => r.classList.remove("selected"));
        
        // Add highlight to the selected rating
        rating.classList.add("selected");
        
        // Update the actual rating
        actualRating.innerHTML = rating.innerHTML;
      });
    });
    
    submitButton.addEventListener("click", () => {
      mainContainer.style.display = "none";
      thanksContainer.classList.remove("hidden");
    });
  });
  