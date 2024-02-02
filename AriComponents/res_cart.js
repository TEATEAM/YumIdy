class ResCart extends HTMLElement {
    constructor() {
        super();
        this.restuarants = [];
        this.attachShadow({ mode: 'open'});
        
        this.render();
        this.readFromLocalStorage();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <style>
        .cart-container {
          color: var(--primary-orange);
          &:hover {
            cursor: pointer;
          }
        }
      </style>
      <div class="cart-container">
        <i class="fa-regular fa-heart"></i>
        <span id="counter">${this.clubs.length}</span>
      </div>
        `;
    }

    connectedCallback() {
        window.addEventListener("")
    }

    disconnectedCallback() {
     
    }

    attributeChangedCallback(name, oldVal, newVal) {
     
    }

    adoptedCallback() {
     
    }

}

window.customElements.define('res_cart', ResCart);