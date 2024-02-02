class IdyCard extends HTMLElement {
    constructor() {
        this.attachShadow({mode:'open'});
        //templete-iin talaar
        
        // club-like-btn component-оос шидсэн эвентийг барьж авах хэсэг
        this.addEventListener("heart-btn-liked", ()=>this.heartBtnClicked(true));
        this.addEventListener("heart-btn-disliked", ()=>this.heartBtnClicked(false));
        this.addEventListener("click", (e)=>this.clicked(e));
    }

    heartBtnClicked(val){
        console.log("received");
        
        let Resdatas = {
            id: thi.getAttribute("id"),
            name: this.getAttribute("name"),
            // stars: this.getAttribute("stars"),
            coverImg: this.getAttribute("coverImg"),
            type: this.getAttribute("type"),
            timeIcon: this.getAttribute("timeIcon"),
            openOrNO: this.getAttribute("openOrNO"),
            price: this.getAttribute("price")
        };

        localStorage.setItem(this.getAttribute("name"), val);

        //club-н картууд зүрхлэгдсэн бол түүнийг мэдээллэх зорилгоор CustomEvent бэлдэж байна.

        const event = new CustomEvent(
            'card-heart-clicked',
            {
                composed: true,
                detail: {
                    name: this.name,
                    isLiked: val,
                    theRes: Resdatas
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
            const resId = this.getAttribute("id");
            window.location.href = `./aboutRes?id=${resId}`;
        }
    }
    connectedCallback() {
        let likedState = localStorage.getItem(this.getAttribute("name"));
        if(likedState === "true"){
            this.shadowRoot.querySelector("idy-like-btn").setAttribute("checked",true);
        }
    }

    static get observedAttributes() {
        return["id", "name", "coverImg", "type", "timeIcon", "openOrNO", "price"];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch(name){
            case "id":
                this.shadowRoot.id = newVal;
            case "name":
                this.shadowRoot.querySelector(".cardInfo .resName").innerHTML = newVal;
                break;
            case "coverImg":
                this.shadowRoot.querySelector("img").src = newVal;
            case "type": 
                this.shadowRoot.querySelector(".foodType").innerHTML = newVal;
            case "timeIcon":
                this.shadowRoot.querySelector(".cardInfo1 #tsagLogo").src = newVal;
                
        }
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('idy-card', IdyCard);