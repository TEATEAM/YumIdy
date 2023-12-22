//Restaurant gsn class baih, render() functiontoi bh 
//umnuh j1 deer app class-d targetid, data bsn.
//htmliin targetIDtai gazar insertlej ugugdluu render-r haruulj bn
class Restaurant {
    //constuctor
    constructor(restaurant) {
        this.id = restaurant.id;
        this.name = restaurant.name;
        this.stars = restaurant.stars;
        this.rank = restaurant.rank;
        this.openingHours = restaurant.openingHours;
        this.description = restaurant.description;
        this.meals = restaurant.meals;
        this.prices = restaurant.prices;
        this.cuisines = restaurant.cuisines;
        this.dishes = restaurant.dishes;
    }
    //build & return
    render() {
        return `
           <img src="/accest/restaurantpage${this.id}.png" alt="img of restaurantpage${this.id}">
           <div class="h_stars">
               <h2>${this.name}</h2>
               <label for="stars${this.rank}" class="starinli">
                   <meter id="stars${this.stars}" class="star-rating" min="0" max="5" value="${this.stars}" title="${this.stars} out of 5 stars"></meter>
               </label>
               <div class="paragraphs">
                   <p>#${this.rank} of 300</p>
                   <p>${this.openingHours}</p>
                   <p>${this.description}</p>
               </div>
           </div>
       `;
    }
}

//1. filter-checkbox checklegdsn bh uyd url soligddog bh
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

//2. server-s uggdluu avdag
export default class restaurantList{
    
    constructor(restauranListUrl, mealFilter, priceFilter, cuisineFilter, dishFilter) {//json url, filtereer 
        this._restauranList = [];//-d pushlene
        this._restauranListUrl = restauranListUrl;//json url
        this.mealFilter = mealFilter;
        this.priceFilter = priceFilter;
        this.cuisineFilter = cuisineFilter;
        this.dishFilter = dishFilter;
    }
    //download then filter() then map() then reduce() 
    Download(targetElement) {
        
        fetch(`${this._restauranListUrl}`)
        .then(result => {
            result.json().then(data => {

                    //filter by meals&prices&cuisines&dishes     
                    const filteredArray = data.record.filter( restaurantItem => restaurantItem.meals === this.mealFilter ||
                                                                                restaurantItem.prices === this.priceFilter ||
                                                                                restaurantItem.cuisines === this.cuisineFilter ||
                                                                                restaurantItem.dishes === this.dishFilter)
        
                    //updating own javascript
                    if (filteredArray.length > 0) { 
                        
                        document.getElementById(targetElement).insertAdjacentHTML("afterbegin",//get by id-r targetElement-d afterbegin-r html insertleh
                            
                            filteredArray
                                .map(   restaurantItem => {
                                    const _restaurantItem = new Restaurant(restaurantItem);
                                    this._restauranList.push(_restaurantItem);
                                    return _restaurantItem.render();
                                })
                                .reduce((prevVal, curVal) => prevVal + curVal, "")
                        );
                    }    
                })    
            })
        .catch(err => { console.log(err) });
        
    }
     
}
//3. url-s filterlej restaurantuudig avdag
 
const params = new URLSearchParams(document.location.search);
const mealFilter = params.getAll("meal");
const priceFilter = params.getAll("price");
const cuisineFilter = params.getAll("cuisine");
const dishFilter = params.getAll("dish");

//Create RecentNews object, with url
const resList = new restaurantList("https://api.jsonbin.io/v3/b/6582b163dc74654018862966",mealFilter, priceFilter, cuisineFilter, dishFilter);

//Load content from RecentNewsURL
resList.Download("restaurant_list");