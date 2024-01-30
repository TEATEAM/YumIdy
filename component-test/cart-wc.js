class CartWc extends HTMLElement {
  constructor() {
    super();
    this.totalNum = 0;
    this.render();
  }
  render() {
    this.innerHTML = `
        <style>
        .addToCard .fa-heart {
                    font-size: 1.3rem;
                }
         .addToCard {
          padding-left:0.15rem;
          background: none;
          border-radius: 0.5rem;
          border: none;
          width: 1.8rem;
          height: 1.8rem;
          & i {
            color: white;
          }
        }
        .addToCard:hover{
          background-color: white;
        }
        </style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
        <a href="html/liked.html">
         <i class="fa-regular fa-heart"></i>
        </a>
        <div class="countPlace" id="count">
        <span>${this.totalNum}</span>
        </div>
        `;
  }
  connectedCallback() {
    render();
  }

  addtoCart(restaurant) {
    this.listJSON.push(restaurant);
    localStorage.setItem("lists", JSON.stringify(this.listJSON));
    this.totalNum++;
    console.log("succesful")
  }
}

window.customElements.define('cart-wc', CartWc);