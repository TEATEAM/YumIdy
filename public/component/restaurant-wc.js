export class RestaurantWc extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("heart-btn-liked", ()=>this.heartBtnClicked(true));
        this.addEventListener("heart-btn-disliked", ()=>this.heartBtnClicked(false));
        this.addEventListener("click", (e)=>this.clicked(e));
        
        //implementation
    }
    render(){
        this.innerHTML = `
        <li>
           <article>
                <img src="${this.img}" alt="img of ${this.name}">        
                <h2>${this.name}</h2> 
                <review-star-wc class="rating" rating="${this.stars}" ratingID="restaurant${this.id}"></review-star-wc>
                <div class="wishlist">
                    <idy-like-btn class="heart"></idy-like-btn>
                </div>
                <p class="rank">#${this.rank} of 300</p>
                <p class="time">${this.openingHours}</p>
                <p class="description">${this.description}</p>
            </article>
        </li>
        `;
    }
    heartBtnClicked(val){
        console.log("received");
        
        let Resdata = {
            id: this.getAttribute("id") ?? 1,
            name: this.getAttribute("name") ?? "test",
            img: this.getAttribute("img") ?? "/accest/img1.png",
            stars: this.getAttribute("stars") ?? 4,
            rank: this.getAttribute("rank") ?? 1,
            openingHours: this.getAttribute("openingHours") ?? "11am-12pm",
            tag: this.getAttribute("tag") ?? "",
            description: this.getAttribute("description") ?? "null",
            meals: this.getAttribute("meals"),
            prices: this.getAttribute("prices"),
            cuisines: this.getAttribute("cuisines"),
            dishes: this.getAttribute("dishes")
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
            const resId = this.getAttribute("id");
            window.location.href = `./about.html?id=${resId}`;
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
