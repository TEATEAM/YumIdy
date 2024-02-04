// 3. productList component uuseh -> filterData eventiig huleej avah
//restaurant-wc-r list uusgeh

import "./restaurant-wc.js";

class RestaurantList extends HTMLElement {
    constructor() {
        super();
        //implementation
        this.checkedTypes = []; //local deer bgaa medeellees checked typenuudig avaad local checkedTypes deer hadgalah
        this.renderRestaurants();
    }
    connectedCallback() {
        //window-d tsatssan eventiig barij avah

        window.addEventListener("filterData", (e) => {
            console.log("tsatssanaa barij avlaaa.");
            console.log(e.detail.typeid);
            let checkedState = localStorage.getItem(e.detail.typeid);
            console.log(checkedState);

            if(checkedState === "true"){//checked?
                console.log("add hiih ajillaa");
                this.querySelector("searchpage-filter").setAttribute(e.detail.typeid, "true");//checked bolgoh
                this.addToList(e.detail);
            }
            else{
                console.log("remove hiih ajillaa");
                this.querySelector("searchpage-filter").setAttribute(e.detail.typeid, "false");
                this.removeFromList(e.detail);
            }
        })
        console.log("card-n callback");
    }
    addToList(type){
        this.checkedTypes.push(type);
        localStorage.setItem("checkedTypes", JSON.stringify(this.checkedTypes));
        this.renderRestaurants();
      }
    removeFromList(type) {
        const index = this.checkedTypes.findIndex(c => c.value === type.value);
        if (resIndex !== -1) {
          this.checkedTypes.splice(index, 1);        
          localStorage.setItem("checkedTypes", JSON.stringify(this.checkedTypes));
          this.renderRestaurants();
        }
    }

    renderRestaurants(){
        this.innerHTML=`
        <section class="hero_container">
            <searchpage-filter></searchpage-filter>
        </section>
        <section class="restaurant container">
            <article class="restaurant_article">
                <button type="button" class="filter_button">Sort by name</button>        
                <ul  id="restaurant_list">
                </ul>
                <!--<script>
                    const app = new App("restaurant_list");
                    app.init();
                </script>-->
            </article>
        </section>
        `
    }
}

window.customElements.define('restaurant-list', RestaurantList);