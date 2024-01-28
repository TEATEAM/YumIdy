class IdyCard extends HTMLElemnet {
    constructor() {
        super()
        this.attachShadow({mode: 'open'});
        //Neg zuil baih ystoi.

        //idy-like-btn component-ийн шидсэн event-ийг барьж авах нь
        this.addEventListener("idy-like-btn-liked", ()=>this.likeBtnClicked(true));
        this.addEventListener("idy-like-btn-disliked", ()=>this.likeBtnClicked(false));
        this.addEventListener("click", (e) => this.clicked(e));
    }

    likeBtnClicked(val){
        let idyData = {
            id: this.getAttribute("id"),
            name: this.getAttribute("name"),
            stars: this.getAttribute("stars"),
            ranks: this.getAttribute("ranks"),
            openingHours: this.getAttribute("openingHours"),
            description: this.getAttribute("description")
        };
        // нэр дээр нь үндэслэн clubuudin дата-г хадгалдаг.
        localStorage.setItem(this.getAttribute("name"), val);
        // club-iin card likelagdsan bol tuuniig medeelleh zotilgoor custom event beldej baina

        const event = new CustomEvent
        ('idy-like-clicked',{
            composed: true,
            detail: {
                name: this.name,
                isLiked: val,
                theIdy: idyData
            }
        });

        //event-ийг dispatch хийж байна.
        window.dispatchEvent(event);

        if(!val)
            this.shadowRoot.querySelector("idy-like-btn").removeAttribute("checked");
    }

    clicked(e){
        const isIdyLikeBtn = e.composedPath().includes(this.shadowRoot.querySelector("idy-like-btn"));

        
    }
 
}