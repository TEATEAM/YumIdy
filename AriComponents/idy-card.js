let niitToo = 0;
class IdyCard extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.listJSON=[];
    }
    render(){
        this.innerHTML = `
        <style>
        .cardInfo{
            display: flex;
            justify-content: space-evenly;
            & .resName{
                width:18rem;
                font-family: var("Quicksand-Medium");
                font-size: 1.125rem;
                font-style: normal;
                font-weight: 700;
                line-height:2rem; /* 133.333% */
                letter-spacing: 0.00625rem;
                color: var(--color-text);
            }
            & .heart-checkbox{
            margin-top: 0.5rem ;
            }
            & .heart-checkbox :hover{
                color: red;
            }
        }
        </style>
        <a href="html/liked.html"> <i class="fa-regular fa-heart"></i></a>
        <div class="countPlace" id="count"><span>${niitToo}</span></div>

        `
    }

    connectedCallback() {
        this.render();
    }

    addtoCard(restaurant){
        this.listJSON.push(restaurant);
        localStorage.setItem("lists", JSON.stringify(this.listJSON));
        niitToo++;
        console.log("paa");
        this.render();
    }

}

window.customElements.define('idy-card', IdyCard);