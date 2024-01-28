class AddWc extends HTMLElement {
    constructor() {
        super();
        this.innerHTML=`
        <style>
        button{
            color: red;
        }
        </style>
        <button>helllo world</button>
        `
    }

    connectedCallback() {
        // console.log("helo wowlr")    
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

window.customElements.define('add-wc', AddWc);