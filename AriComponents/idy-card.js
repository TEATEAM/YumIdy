class IdyCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});

        this.addEventListener
        ("like-btn-liked", () => this.likeBtn)
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

window.customElements.define('idy-card', IdyCard);