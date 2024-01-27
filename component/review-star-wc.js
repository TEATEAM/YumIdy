class ReviewStarWc extends HTMLElement {
    constructor() {
        super();
        this.rating = this.getAttribute("rating");
        this.ratingID = this.getAttribute("ratingID");//ratingid n yund zoriulsan rating star gdgiig ilerhiine
        this.labelinput = this.getAttribute("labelinput") ?? "";
        this.percent = this.rating/5*100;
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
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
        <label for="${this.ratingID}">${this.labelinput}</label>
          <meter id="${this.ratingID}" class="star-rating" min="0" max="5" value="${this.rating}" title="${this.rating} out of 5 stars"></meter>
        `;
    }
  
}

window.customElements.define('review-star-wc', ReviewStarWc);
