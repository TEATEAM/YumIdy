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
            height: 2.79875rem;
            background: none;
            border-radius: 1.25rem;
            border:var(--border);
            display: flex;
            align-items: center;
            text-decoration: none;
            font-family:'quicksand';
            & span {
              font-family:'arial';
              font-size: var(--font-sizeSmall);
              font-weight: lighter;
              color: var(--color-accent);
              padding-left: 5px;
              padding-top: 3px;
              text-decoration: none;
            }
            & .durtai{
              font-size: var(--font-sizeSmall);
              margin-left: 1.5rem;
            }
          }
          .cart-container:hover{
            color: var(--color-text);
            background: var(--color-accent);
            cursor: pointer;
            transition: .5s;
            & span {
              color: var(--color-text);
            }
          }
        </style>
        <div class="cart-container">
          <p class="durtai">Дуртай</p>
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