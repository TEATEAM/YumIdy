const template = document.createElement("template");

template.innerHTML = `
    <article class="idy-card">
        <img class="foodImg">
        <div class="cardInfo">
            <h4 class="resName"></h4>
            <idy-like-btn></idy-like-btn>
        </div>
        <div class="cardInfo1">
            <i class="fa-regular fa-clock" id="tsagLogo"></i>
            <p class="time"></p>
            <p class="price"></p>
        </div>
        <p class="foodType"></p>
        <slot name="remove"></slot>
    </article>
`
class IdyCard extends HTMLElement {
    constructor() {
        this.attachShadow({mode:'open'});
        //templete-iin talaar
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // club-like-btn component-оос шидсэн эвентийг барьж авах хэсэг
        // this.addEventListener("heart-btn-liked", ()=>this.heartBtnClicked(true));
        // this.addEventListener("heart-btn-disliked", ()=>this.heartBtnClicked(false));
        // this.addEventListener("click", (e)=>this.clicked(e));
    }

    // heartBtnClicked(val){
    //     console.log("received");
        
    //     let Resdatas = {
    //         id: thi.getAttribute("id"),
    //         name: this.getAttribute("name"),
    //         // stars: this.getAttribute("stars"),
    //         coverImg: this.getAttribute("coverImg"),
    //         type: this.getAttribute("type"),
    //         timeIcon: this.getAttribute("timeIcon"),
    //         openOrNO: this.getAttribute("openOrNO"),
    //         price: this.getAttribute("price")
    //     };

    //     localStorage.setItem(this.getAttribute("name"), val);

    //     //club-н картууд зүрхлэгдсэн бол түүнийг мэдээллэх зорилгоор CustomEvent бэлдэж байна.

    //     const event = new CustomEvent(
    //         'card-heart-clicked',
    //         {
    //             composed: true,
    //             detail: {
    //                 name: this.name,
    //                 isLiked: val,
    //                 theRes: Resdatas
    //             }
    //         }
    //     );

    //     window.dispatchEvent(event);

    //     if(!val){
    //         this.shadowRoot.querySelector("idy-like-btn").removeAttribute("checked");
    //     }
    // }

    // clicked(e){
    //     const isIdyHeartBtn = e.composedPath().includes(this.shadowRoot.querySelector("idy-like-btn"));

    //     if(!isIdyHeartBtn) {
    //         const resId = this.getAttribute("id");
    //         window.location.href = `./aboutRes?id=${resId}`;
    //     }
    // }
    // connectedCallback() {
    //     let likedState = localStorage.getItem(this.getAttribute("name"));
    //     if(likedState === "true"){
    //         this.shadowRoot.querySelector("idy-like-btn").setAttribute("checked",true);
    //     }
    // }

    static get observedAttributes() {
        return["id", "name", "img", "type", "time", "price"];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch(name){
            case "id":
                this.shadowRoot.id = newVal;
                break;
            case "name":
                this.shadowRoot.querySelector(".resName h4").innerHTML = newVal;
                break;
            case "img":
                this.shadowRoot.querySelector(".foodImg").src = newVal;
                break;
            case "type":
                this.shadowRoot.querySelector(".foodType p").innerHTML = newVal;
                break;
            case "time":
                this.shadowRoot.querySelector(".time p").innerHTML = newVal;
                break;
            case "price":
                this.shadowRoot.querySelector(".price p").innerHTML = newVal;
                break;
        }
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('idy-card', IdyCard);