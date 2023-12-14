class Restaurant {
    constructor(name, stars, rank, openingHours, description) {
        this.name = name;
        this.stars = stars;
        this.rank = rank;
        this.openingHours = openingHours;
        this.description = description;
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
    displayRestaurants() {
        this.restaurantList.innerHTML = '';

        this.restaurants.forEach(restaurant => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
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
            `;
            this.restaurantList.appendChild(listItem);
        });
    }
    sortByName() {
        this.restaurants.sort((a, b) => a.name.localeCompare(b.name));
        this.displayRestaurants();
    }
}

const searchPage = new SearchPage();
