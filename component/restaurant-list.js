// 3. productList component uuseh -> filterData eventiig huleej avah
//restaurant-wc-r list uusgeh

import "./restaurant-wc.js";

class RestaurantList extends HTMLElement {
    constructor() {
        super();
        //implementation
        this.checkedTypes = JSON.parse(localStorage.getItem("checkedTypes")); //checklegdsen typenuudig avaad local deer hadgalah
        this.renderRestaurants();
    }
    connectedCallback() {
        //window-d tsatssan eventiig barij avah
        window.addEventListener("filterData", (e) => {
            console.log("tsatssanaa barij avlaaa.")
            if(e.detail.checked){
                this.addToList(e.detail);
                this.querySelector("#"+e.datail.id).setAttribute("checked",true);
            }
            else{
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
        const addedRes =`<restaurant-wc></restaurant-wc>`
        document.querySelector("#restaurant_list").insertAdjacentHTML("beforeend" , addedRes);
        
    }
}

window.customElements.define('restaurant-list', RestaurantList);