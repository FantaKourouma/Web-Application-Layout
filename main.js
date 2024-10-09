document.addEventListener("DOMContentLoaded", function() {
    // Search Functionality
    const searchInput = document.querySelector('.search-bar input');
    const recipeCards = document.querySelectorAll('.card');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchValue = searchInput.value.toLowerCase();
            recipeCards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                card.parentElement.style.display = title.includes(searchValue) ? 'block' : 'none';
            });
        });
    }

    // Dynamic Recipe Addition
    const recipeForm = document.getElementById('recipe-form');
    if (recipeForm) {
        recipeForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const title = document.getElementById('recipe-title').value;
            const description = document.getElementById('recipe-description').value;

            const recipeContainer = document.querySelector('#recipes .row');
            const newCard = document.createElement('div');
            newCard.classList.add('col-md-4');
            newCard.innerHTML = `
                <div class="card">
                    <img src="placeholder-image.jpg" class="card-img-top" alt="${title}">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${description}</p>
                        <a href="#" class="btn btn-primary">View Recipe</a>
                    </div>
                </div>
            `;
            recipeContainer.appendChild(newCard);
            document.getElementById('recipe-form').reset();
        });
    }

    // Meal Planner Functionality
    const mealPlanForm = document.getElementById('meal-plan-form');
    if (mealPlanForm) {
        mealPlanForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const day = document.getElementById('day-select').value;
            const recipeName = document.getElementById('recipe-name').value;

            const mealPlanContainer = document.getElementById(day);
            const newMeal = document.createElement('div');
            newMeal.classList.add('day');
            newMeal.innerHTML = `<p>${recipeName}</p>`;
            mealPlanContainer.appendChild(newMeal);
            mealPlanForm.reset();
        });
    }
});
