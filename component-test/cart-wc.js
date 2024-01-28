class CartWc extends HTMLElement {
    constructor() {
        super();
        this.totalNum=0;
        this.render();
    }
    render() {
        this.innerHTML = `
                <div class="countPlace" id="count"><span>${this.totalNum}</span></div>
                <p>hello worl</p>
        `;
    }
    connectedCallback() {
        render();
    }

    addtoCart(restaurant){
        this.listJSON.push(restaurant);
        localStorage.setItem("lists", JSON.stringify(this.listJSON));
        this.totalNum++;
    }
}

window.customElements.define('cart-wc', CartWc);