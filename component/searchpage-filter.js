class SearchpageFilter extends HTMLElement {
    constructor() {
        super();
        //implementation
        this.shadowRoot = this.attachShadow({mode: "open"})
        this.#Render();
    }

    #Render() {
        this.shadowRoot.innerHTML = `
        <article  class="filter_checkbox">
            <h3>Meals</h3>
            <ul class="meals">
                <li><input type="checkbox" name="meal[]" id="breakfast" value="1.1"> <label for="breakfast" checked>Breakfast</label></li>
                <li><input type="checkbox" name="meal[]" id="lunch" value="1.2"> <label for="lunch">Lunch</label></li>
                <li><input type="checkbox" name="meal[]" id="dinner" value="1.3"> <label for="dinner">Dinner</label></li>
            </ul>
            <h3>Price</h3>
            <ul class="price">
                <li><input type="checkbox" name="price[]" id="cheap-eats" value="2.1"> <label for="cheap-eats">Cheap Eats</label></li>
                <li><input type="checkbox" name="price[]" id="mid-range" value="2.2"> <label for="mid-range">Mid-range</label></li>
                <li><input type="checkbox" name="price[]" id="fine-dining" value="2.3"> <label for="fine-dining">Fine Dining</label></li>
            </ul>
            <h3>Cuisines</h3>
            <ul class="cuisines">
                <li><input type="checkbox" name="cuisine[]" id="mongolian" value="3.1"> <label for="mongolian">Mongolian</label></li>
                <li><input type="checkbox" name="cuisine[]" id="asian" value="3.2"> <label for="asian">Asian</label></li>
                <li><input type="checkbox" name="cuisine[]" id="european" value="3.3"> <label for="european">European</label></li>
                <li><input type="checkbox" name="cuisine[]" id="american" value="3.4"> <label for="american">American</label></li>
            </ul>
            <h3>Dishes</h3>
            <ul class="dishes">
                <li><input type="checkbox" name="dish[]" id="salad" value="4.1"> <label for="salad">Salad</label></li>
                <li><input type="checkbox" name="dish[]" id="burger" value="4.2"> <label for="burger">Burger</label></li>
                <li><input type="checkbox" name="dish[]" id="beef" value="4.3"> <label for="beef">Beef</label></li>
                <li><input type="checkbox" name="dish[]" id="lamb" value="4.4"> <label for="lamb">Lamb</label></li>
            </ul>
        </article>
        <!--css styleiin oruulj irj bolno-->
        `
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

window.customElements.define('searchpage-filter', SearchpageFilter);
