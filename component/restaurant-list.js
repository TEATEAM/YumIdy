// 3. productList component uuseh -> filterData eventiig huleej avah
//restaurant-wc-r list uusgeh

import "./restaurant-wc.js";

class testObject{
    constructor(item) {
        this.name = item.name;
        this.id = item.id;
        this.value = item.value;
    }       
}

class RestaurantList extends HTMLElement {
    constructor() {
        super();
        //implementation
        this.checkedTypes = JSON.parse(localStorage.getItem("checkedTypes")); //checklegdsen typenuudig avaad local deer hadgalah
        this.renderRestaurants();

    }
    connectedCallback() {
        //checkbox deer click hiihed checklegdsen bol checkedType-s ustgah, checklegdeegu bol hadgalj uguh hergtei
        document.addEventListener("filterData" , (event) => {//check gdg event uusehed
            let item = new testObject(event.detail); 
            let hasThisItem = false;
            for(let product of this.checkedTypes) {
                if(product.name === item.name) {
                    hasThisItem = true;
                    break;
                }
            }
            if(!hasThisItem) {
                this.checkedTypes.push(item);
            }
            if(hasThisItem){       
                //umnu n chekclegdsen bsn tul ustgah
                for(let i = 0; i < this.checkedTypes.length ; i++) {
                    if(this.checkedTypes[i].value === event.detail.value) {
                        this.checkedTypes.splice(i , 1);
                    }
                }
            }
            // localaa shinechilne
            localStorage.setItem("checkedTypes" , JSON.stringify(this.checkedTypes));
            this.renderRestaurants()
        });
    }

    renderRestaurants(){
        for (const ckecked of this.checkedTypes) {
            const addedRes =`
            <restaurant-wc meals="${checked.value}"></restaurant-wc>`
            this.querySelector("#restaurant_list").insertAdjacentHTML("beforeend" , addedRes);
        }
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