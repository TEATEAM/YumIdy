class ResCart extends HTMLElement {
    constructor() {
        super();
        this.restaurants = [];
        this.attachShadow({ mode: 'open'});
        
        this.render();
        this.readFromLocalStorage();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <style>
          .cart-container {
            color: var(--color-text);
            width: 8.125rem;
            height: 3.125rem;
            background: none;
            font-size: var(--font-sizeSmall);
            border-radius: 1.25rem;
            border:var(--border);
            display: flex;
            align-items: center;
            text-decoration: none;
            & :hover {
              cursor: pointer;
            }
            & span {
              color: var(--color-accent)
            }
          }
        </style>
        <div class="cart-container">
          <p>Дуртай</p>
          <span id="counter">${this.restaurants.length}</span>
        </div>
          `;
    }

    connectedCallback() {
        window.addEventListener("card-heart-clicked", (e) => {
            if(e.detail.isLiked){
                this.addToCart(e.detail.theRes);
            }
            else{
                this.removeFromCart(e.detail.theRes);
            }
        });
    }
    addToCart(res){
      this.restaurants.push(res);
      localStorage.setItem("cart", JSON.stringify(this.restaurants));
      this.render();
    }
    removeFromCart(res) {
      const resIndex = this.restaurants.findIndex(c => c.name === res.name);
      if (resIndex !== -1) {
        this.restaurants.splice(resIndex, 1);
        localStorage.setItem("cart", JSON.stringify(this.restaurants));
        this.render();
      }
    }
    readFromLocalStorage(){
      const resList = JSON.parse(localStorage.getItem("cart"));
      if(resList !== null){
          this.restaurants = resList;
          this.render()
      }
    }

}

window.customElements.define('res-cart', ResCart);