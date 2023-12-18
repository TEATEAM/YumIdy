function updateURL() {
    // checklegdsn mealsiin utguudig avah
    var selectedMeals = document.querySelectorAll('input[name="meal[]"]:checked');
    
    // checklegdsn price-n utguudig avah
    var selectedPrices = document.querySelectorAll('input[name="price[]"]:checked');

    // checklegdsn cuisinesiin utguudig avah
    var selectedCuisines = document.querySelectorAll('input[name="cuisine[]"]:checked');
    
    // checklegdsn dishes utguudig avah
    var selectedDishes = document.querySelectorAll('input[name="dish[]"]:checked');

    // Build the URL parameters
    var params = [];
    selectedMeals.forEach(function(meal) {
        params.push('meal=' + encodeURIComponent(meal.value));
    });

    selectedPrices.forEach(function(price) {
        params.push('price=' + encodeURIComponent(price.value));
    });
    
    selectedCuisines.forEach(function(cuisine) {
        params.push('cuisine=' + encodeURIComponent(cuisine.value));
    });

    selectedDishes.forEach(function(dish) {
        params.push('dish=' + encodeURIComponent(dish.value));
    });

    // Update the URL
    var newURL = window.location.origin + window.location.pathname + '?' + params.join('&');
    history.pushState(null, '', newURL);
}

// Attach event listeners to checkboxes
var checkboxes = document.querySelectorAll('input[name="meal[]"], input[name="price[]"], input[name="cuisine[]"], input[name="dish[]"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', updateURL);
});