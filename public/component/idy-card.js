const template = document.createElement("template");

template.innerHTML = `
    
    <link rel="stylesheet" href="./css/resCard.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" 
    crossorigin="anonymous" 
    referrerpolicy="no-referrer" 
    />
    <script type="module" src="./review-star-wc.js"></script>
    
    <article class="idy-card">
        <img class="foodImg">
        <div class="cardInfo">
            <h4 class="resName"></h4>  <idy-like-btn></idy-like-btn>
        </div>
        <div class="cardInfo1">
            <i class="fa-regular fa-clock" id="tsagLogo"></i>
            <span class="time"></span>
            <span class="price"></span>
        </div>
        <div class=cardInfo2>
        <span class="foodType"></span>
        <review-star-wc class="rating"></review-star-wc>
        </div>
    </article>
`
class IdyCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        //templete-iin talaar
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        //like-btn component-оос шидсэн эвентийг барьж авах хэсэг
        this.addEventListener("heart-btn-liked", ()=>this.heartBtnClicked(true));
        this.addEventListener("heart-btn-disliked", ()=>this.heartBtnClicked(false));
        this.addEventListener("click", (e)=>this.clicked(e));
    }

    heartBtnClicked(val){
        console.log("received");
        
        let Resdata = {
            id: this.getAttribute("id"),
            name: this.getAttribute("name"),
            img: this.getAttribute("img"),
            type: this.getAttribute("type"),
            time: this.getAttribute("time"),
            price: this.getAttribute("price"),
            star: this.getAttribute("star")
        };

        localStorage.setItem(this.getAttribute("name"), val);

        //карт зүрхлэгдсэн бол түүнийг мэдээллэх зорилгоор CustomEvent бэлдэж байна.

        const event = new CustomEvent(
            'card-heart-clicked',
            {
                composed: true,
                detail: {
                    name: this.name,
                    isLiked: val,
                    theRes: Resdata
                }
            }
        );

        window.dispatchEvent(event);

        if(!val){
            this.shadowRoot.querySelector("idy-like-btn").removeAttribute("checked");
        }
    }

    clicked(e){
        const isIdyHeartBtn = e.composedPath().includes(this.shadowRoot.querySelector("idy-like-btn"));

        if(!isIdyHeartBtn) {
            window.location.href = `./html/restaurantpage.html`;
        }
    }
    connectedCallback() {
        //local deer bga medeellees name-r resaa likelasan esehiig medeh herev liked bol checked bolgoh
        let likedState = localStorage.getItem(this.getAttribute("name"));
        if(likedState === "true"){
            this.shadowRoot.querySelector("idy-like-btn").setAttribute("checked",true);
        }
        console.log("card-n callback");
    }

    static get observedAttributes() {
        return["id", "name", "img", "type", "time", "price", "star"];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch(name){
            case "id":
                this.shadowRoot.id = newVal;
                this.shadowRoot.querySelector("review-star-wc").setAttribute("ratingID","restaurant"+newVal);
                break;
            case "name":
                this.shadowRoot.querySelector(".resName").innerHTML = newVal;
                break;
            case "img":
                this.shadowRoot.querySelector(".foodImg").src = newVal;
                break;
            case "type":
                this.shadowRoot.querySelector(".foodType").innerHTML = newVal;
                break;
            case "time":
                this.shadowRoot.querySelector(".time").innerHTML = newVal;
                break;
            case "price":
                this.shadowRoot.querySelector(".price").innerHTML = newVal;
                break;
            case "star":
                this.shadowRoot.querySelector("review-star-wc").setAttribute("rating", newVal);
                break;
        }
    }
}

window.customElements.define('idy-card', IdyCard);