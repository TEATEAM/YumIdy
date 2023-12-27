class RestaurantWc extends HTMLElement {
    constructor(restaurant) {
        super();
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
        //implementation
        this.innerHTML = String.raw`
        <li>
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
        </li>
       `;
    }

    connectedCallback() {
        //implementation
    }

    disconnectedCallback() {
        //implementation
    }

    attributeChangedCallback(name, oldVal, newVal) {
        //implementation
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('restaurant-wc', RestaurantWc);
<restaurant-wc></restaurant-wc>