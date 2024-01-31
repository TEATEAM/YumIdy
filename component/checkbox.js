// 1. filter-iin component uuseh
//      ->checklesen type g hadgalah array(uuniig local deer hadgalah), 
//      ->checkboxuud deer darahaar customEvent boloh filterData uuseh
//          filterData gdg event n checklegdsen typeuudiig hadgalaad dispatch hiih
//              filterdsen data barij avaad renderleh

class CheckboxWC extends HTMLElement {

    constructor() {
        super();
        this.name = this.getAttribute("name");
        this.id = this.getAttribute("id");
        this.value = this.getAttribute("value");
        this.#Render();
    }
    #Render() {
        this.innerHTML = `
            <li>
                <input type="checkbox" name="${this.name}" id="${this.id}" value="${this.value}"> 
                <label for="${this.id}">${this.id}</label>
            </li>`
    }
    connectedCallback() {
        //implementation
        //checkbox eer darahad custom event uusjiin
        let input = this.querySelectorAll("input");//buh inputtei ymnuud hadgalchij bgn
        input[0].addEventListener("click", (e)=> {
            e.stopPropagation();
            const event = new CustomEvent("filterData", {
                bubbles: true,
                composed: true,
                detail:{
                    name: this.name,
                    id: this.id,
                    value: this.value,
                }
            })
            console.log(checkbox);
            document.dispatchEvent(event);
            console.log("ajillajinaaa");
        })
        this.#Render();
    }


    disconnectedCallback() {
        //implementation
    }
    static get observedAttributes() {
        return ["name", "id", "value"];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        //implementation
        switch (name) {
            case "name":
                this.name = newVal;
                this.#Render();
                break;
            case "id":
                this.id = newVal;
                this.#Render();
                break;
            case "value":
                this.value = newVal;
                this.#Render();
                break;
            default:
                break;
        }
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('checkbox-wc', CheckboxWC);




var starValues = Array.from(starCheckboxes).map(checkbox => checkbox.value);

// Get selected detail values
var detailCheckboxes = document.querySelectorAll('#detail input[type="checkbox"]:checked');
var detailValues = Array.from(detailCheckboxes).map(checkbox => checkbox.value);