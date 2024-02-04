// 1. filter-iin component uuseh
//      ->checklesen type g hadgalah array(uuniig local deer hadgalah), 
//      ->checkboxuud deer darahaar customEvent boloh filterData uuseh
//          filterData gdg event n checklegdsen typeuudiig hadgalaad dispatch hiih
//              filterdsen data barij avaad renderleh

class SearchpageFilter extends HTMLElement {
    constructor() {
        super();
        this.#Render();
        this.eventListenerAdded = false;
        
        // //filter-n component-оос shidsen eventiig barij avjiin
        // this.addEventListener("checked", ()=>this.checkboxChecked(true));
        // this.addEventListener("unchecked", ()=>this.checkboxChecked(false));
        // this.addEventListener("click", (e)=>this.clicked(e));

    }

    #Render() {
        this.innerHTML = `
        <article  class="filter_checkbox">
            <h3>Meals</h3>
            <ul class="meals">
                <li><input type="checkbox" name="meal[]" id="breakfast" value="1.1"> <label for="breakfast">Breakfast</label></li>
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

    connectedCallback(){
        //implementation
        //ene componentend click gdg event uushed clickHandler() duudagdanaa.
        if(!this.eventListenerAdded){
            this.eventListenerAdded = true;
            this.addEventListener(
                "click",
                this.clickHandler, 
                true
            )
        }
        this.#Render();
    }
    clickHandler(e){
        //ug click hiisen zuil n "input" bwl checklesen checklegdeegu esehiig harna
        if(e.target.tagName.toLowerCase() == "input")
        {   
            let val = e.target.checked;
            // if(e.target.checked){       //checklegsnuu checklegdeeguiyu esehiig medne
            //     val = "true"; 
            // }
            localStorage.setItem(e.target.getAttribute("id"), val); //local deer id-r checked eseheer hadgalah
            //checkbox checklegdesn bol medeelleh CustomEvent
            const event = new CustomEvent("filterData", {
                bubbles: true,
                capture: true,
                composed: true,
                detail:{
                    typeid: e.target.getAttribute("id"),
                    name: e.target.getAttribute("name"),
                    value: e.target.getAttribute("value"),
                    isChecked: val,
                }
            }) 
            console.log(e.target.getAttribute("id"));
            //parent ruu n tsatsna
            this.parentElement.dispatchEvent(event);
            console.log("filter dispatch tsatsagdlaa");
        }
    }
    setAttribute(id,val){
        console.log("set attr ajillaj bn");
        document.getElementById(id).checked = val;
    }
    // static get observedAttributes(){
    //     return ["checked"];
    // }

    // attributeChangedCallback(name, oldVal, newVal) {
    //     if(name === "checked")
    //         this.querySelector("#heart").checked = newVal != null;
    // }

}

window.customElements.define('searchpage-filter', SearchpageFilter);
