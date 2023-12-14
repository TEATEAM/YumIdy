//restaurant-wc-r list uusgeh
import "./restaurant-wc.js";

class RestaurantList extends HTMLElement {
    constructor() {
        super();
        //implementation
        this.innerHTML = html`
        <article> 
            <img src="/accest/restaurantpage3.png" alt="">
                <div class="h_stars">
                    <h2>Burger&Pizza</h2>
                    <label for="stars5" class="starinli">
                        <meter id="stars5" class="average-rating" min="0" max="5" value="5" title="5 out of 5 stars"></meter>
                    </label>
                    <div class="paragraphs">
                        <p>#2 of 300</p>
                        <p>11am-22am</p>
                        <p>Best Sushi House in Ub</p>
                    </div>
                </div> 
        </article>`
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

window.customElements.define('restaurant-list', RestaurantList);