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
               <!--wishlistiin zurh-->
                <label for="heart-checkbox" class="heart-label">
                    <svg class="heart" width="32" height="32" viewBox="0 0 34 32"  xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_600_1843)">
                        <path d="M10.5121 4.3279C11.8452 4.11558 13.2123 4.18562 14.5126 4.53285C15.813 4.88008 17.0133 5.49565 18.0253 6.33418L18.081 6.38064L18.1322 6.33841C19.098 5.54617 20.2335 4.95554 21.4628 4.60594C22.6921 4.25634 23.9871 4.15579 25.2613 4.31101L25.6318 4.36169C27.238 4.6209 28.7392 5.28128 29.9766 6.27289C31.2139 7.26451 32.1414 8.55045 32.6607 9.99453C33.18 11.4386 33.2718 12.9871 32.9265 14.476C32.5811 15.9649 31.8114 17.3387 30.6989 18.4521L30.4277 18.7126L30.3554 18.7703L19.1339 29.1593C18.8749 29.3989 18.5318 29.5426 18.1682 29.5638C17.8046 29.5851 17.445 29.4824 17.1562 29.2748L17.0146 29.1593L5.72825 18.7098C4.53262 17.6224 3.68231 16.2469 3.27149 14.7356C2.86067 13.2243 2.90538 11.6363 3.40067 10.1473C3.89595 8.65828 4.82248 7.32648 6.07764 6.29937C7.3328 5.27225 8.86761 4.58991 10.5121 4.3279Z"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_600_1843">
                        <rect width="36.15" height="33.79" />
                        </clipPath>
                        </defs>
                    </svg>                              
                    <input name="heart-checkbox" id="heart-checkbox" type="checkbox">
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