class LikeBtn extends HTMLElement {
    constructor()
    {
        super();
        this.Render();
        this.eventListenerAdded = false;
    }

    Render(){
        this.innerHTML = `
            <div class="heart-checkbox" id = "heart-button">
                <input type="checkbox" id="heart"/>
                <label for="heart"><i class="fa-solid fa-heart"></i></label>
            </div>
        `;
    }

    //Уг btn  дээр click дарах үед clickhandler function ажиллана.
    connectedCallback() {
        if(!this.eventListenerAdded){
            this.eventListenerAdded = true; //hervee evenListener nemegdeegui bol nemeh
            this.addEventListener(//custom element ruu nemeh
                "click",
                this.clickHandler,
                true
            )
        }
    }

    // clickHandler function
    clickHandler(e){
        // нөхцөл нь button элемент мөн эсэхийг шалгадаг
        if(e.target.tagName.toLowerCase() == "input"){
            let eventName = "idy-like-btn-disliked";
            //хэрвээ input мөн байх юм бол click event has checked property.
            if(e.target.checked){
                eventName = 'idy-like-btn-liked';
            }
            // Эцэг componentеnt-той холбоход бэлдэж байгаа буюу card-руу шидэхэд бэлдэж байна.
            const event = new Event(eventName, {
                bubbles: true,
                capture: true,
                composed: true
            });
            this.parentElement.dispatchEvent(event);
            //console hiij shalgaj bolno.
        }
    }

    static get observedAttributes(){
        return ["checked"];
    }

    attributeChangedCallback(name, oldVal, newVal){
        if(name === "checked"){
            //querySelector ni heart ID-tai elementiig odeer baigaa custo elements olno.
            this.querySelector("#heart").checked = newVal != null;
        }
    }
}

window.customElements.define('idy-like-btn',LikeBtn);