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
    constructor() {
        this.restaurants = [];
        this.restaurantList = document.querySelector('.restaurant_list');
        this.filterButton = document.querySelector('.filter_button');
        this.filterButton.addEventListener('click', this.sortByName.bind(this));
        this.fetchRestaurants();
    }

    fetchRestaurants() {
        fetch('searchpage.json')
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

    displayRestaurants() {
        this.restaurantList.innerHTML = '';

        this.restaurants.forEach(restaurant => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="/accest/restaurantpage1.png" alt="">
                <div>
                    <div class="display-stars">
                        <h3>${restaurant.name}</h3>
                        ${this.displayStars(restaurant.stars)}
                    </div>
                    <p>#${restaurant.rank} of 300</p>
                    <p>${restaurant.openingHours}</p>
                    <p>${restaurant.description}</p>
                </div>
            `;
            this.restaurantList.appendChild(listItem);
        });
    }

    displayStars(stars) {
        let starHtml = '';
        for (let i = 1; i <= 5; i++) {
            starHtml += `
                <label for="stars${i}" class="star ${i <= stars ? 'filled' : ''}">&#9733;</label>
            `;
        }
        return starHtml;
    }

    sortByName() {
        this.restaurants.sort((a, b) => a.name.localeCompare(b.name));
        this.displayRestaurants();
    }
}

const searchPage = new SearchPage();
