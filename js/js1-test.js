class Restaurant {
    //constuctor
    constructor(restaurant) {
        this.name = restaurant.name;
        this.stars = restaurant.stars;
        this.rank = restaurant.rank;
        this.openingHours = restaurant.openingHours;
        this.description = restaurant.description;
    }
    //build & return
    render() {
        return `
            <article>
                <img src="/accest/restaurantpage2.png" alt="">
                <div class="h_stars">
                    <h2 class="resnamebtn">${restaurant.name}</h2>
                    <label for="stars${restaurant.rank}" class="starinli">
                        <meter id="stars${restaurant.rank}" class="average-rating" min="0" max="5" value="${restaurant.stars}" title="${restaurant.stars} out of 5 stars"></meter>
                    </label>
                    <div class="paragraphs">
                        <p>#${restaurant.rank} of 300</p>
                        <p>${restaurant.openingHours}</p>
                        <p>${restaurant.description}</p>
                    </div>
                </div>
            </article>`;
    }
    //objectiin [property]-g uurchluh
    bind(eventType, element, property) { 
        
        gebi(`${element}_${this.id}`).addEventListener(eventType, (event) => {
            
            //this[property] used to access the object's property.
            //for example this["title"]
            //event.target gets <h1> element in our example
            this[property] = event.target.innerHTML;
            recentNews._hasChanged = true;
            console.log(`event:${event} this=${JSON.stringify(restaurantList)}`);
        })
        return this;
    }
}

export default class restaurantList{
    constructor(restaurantListUrl, filter){
        this.
    }
}

class SearchPage {
    constructor(jsonUrl = 'searchpage.json') {
        this.restaurants = [];
        this.restaurantList = document.querySelector('.restaurant_list');
        this.filterButton = document.querySelector('.filter_button');
        this.filterButton.addEventListener('click', this.sortByName.bind(this));
        this.fetchRestaurants(jsonUrl);
    }

    fetchRestaurants(jsonUrl) {
        fetch(jsonUrl)
            .then(response => response.json())
            .then(data => {
                this.restaurants = data.map(restaurantData => new Restaurant(
                    restaurantData.name,
                    restaurantData.stars,
                    restaurantData.rank,
                    restaurantData.openingHours,
                    restaurantData.description
                ));
                this.displayRestaurants();
            })
            .catch(error => {
                console.error('Error fetching restaurants:', error);
            });
    }
//comment sain bicheerei
    
    sortByName() {
        this.restaurants.sort((a, b) => a.name.localeCompare(b.name));
        this.displayRestaurants();
    }
}

const searchPage = new SearchPage();
