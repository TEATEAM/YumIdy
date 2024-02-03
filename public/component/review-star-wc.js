class ReviewStarWc extends HTMLElement {
    constructor() {
        super();
        this.rating = this.getAttribute("rating") ?? 0;
        this.ratingID = this.getAttribute("ratingID") ?? "default";//ratingid n yund zoriulsan rating star gdgiig ilerhiine
        this.labelinput = this.getAttribute("labelinput") ?? "";
        this.class = this.getAttribute("class") ?? "";
        this.percent = this.rating/5*100;
        this.innerHTML = `
        <style>
        label{
          font:var(--p-font) ;
        }
        .star-rating{
          appearance: none;
          color: transparent;
          width: auto;
          display: inline-block;
          vertical-align: baseline;
          font-size: 2rem;
        }
        #${this.ratingID}::before {
          content: '★★★★★'; 
          background: linear-gradient(90deg, var(--color-accent) ${this.percent}%, var(--color-span) ${this.percent}%);
          -webkit-background-clip: text;
        }
        </style>
        <label for="${this.ratingID}" class= ${this.class}>${this.labelinput}</label>
          <meter id="${this.ratingID}" class="star-rating" min="0" max="5" value="${this.rating}" title="${this.rating} out of 5 stars"></meter>
        `;
    }
    static get observedAttributes() {
      return ["rating", "ratingID", "labelinput", "class"];
    }

    attributeChangedCallback(name, oldVal, newVal) { 
      switch(name){
        case "rating":
          this.rating = newVal;
          break;
        case "ratingID":
          this.ratingID = newVal;
          break;
        case "labelinput":
          this.labelinput = newVal;
          break;
        case "class":
          this.class = newVal;
          break;
      }
    }
    setAttribute(name, newVal){
      switch(name){
        case "rating":
          this.rating = newVal;
          break;
        case "ratingID":
          this.ratingID = newVal;
          break;
        case "labelinput":
          this.labelinput = newVal;
          break;
        case "class":
          this.class = newVal;
          break;
      }
    }
    
}

window.customElements.define('review-star-wc', ReviewStarWc);
