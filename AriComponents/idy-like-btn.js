// Нүүр хуудасны хэсэгт байрлах card-н дээр байрлах зүрх btn-ны хэсэг
class IdyLikeBtn extends HTMLElement {
    constructor() {
        super();
        this.Render();
        this.eventListenerAdded = false;
    }
    // Render
    Render() {
        this.innerHTML = `
        <div class="heart-checkbox">
            <input type="checkbox" id="heart"/>
            <label for="heart"><i class="fa-regular fa-heart"></label>
        </div>
        `;
    }
    // Уг зүрх дээр click дарах үед clickHandler function ажиллана.
    connectedCallback() {
        if(!this.eventListenerAdded){
            this.eventListenerAdded = true;
            this.addEventListener(
                "click",
                this.clickHandler, 
                true
            )
        }
    }

    // clickHandler function
    clickHandler(e){
        if(e.target.tagName.toLowerCase() == "input")
        {
            let eventName = "heart-btn-disliked";
            if(e.target.checked){
                eventName = "heart-btn-liked";
            }

            // Кард-руу эвент шидэхэд бэлдэж байна.
            const event = new Event(
                eventName,
                {
                    bubbles: true,
                    capture: true,
                    composed: true
                });
            this.parentElement.dispatchEvent(event);
            console.log("tsatsagdlaa");
        }
    }

    static get observedAttributes(){
        return ["checked"];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if(name === "checked")
            this.querySelector("#heart").checked = newVal != null;
    }

}

window.customElements.define('idy-like-btn', IdyLikeBtn);