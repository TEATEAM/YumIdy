class likeBtn extends HTMLElement{
    constructor(){
        super();
        this.Render();
        this.eventListenerAdded = false;
    }

    Render(){
        this.innerHTML = ` 
            <input type="checkbox" class="iconZurh">
            <i class="fa-regular fa-heart"></i>
        `;
    }

    //click hiih uyd clickhandler function ajillana
    connectedCallback(){
        if(!this.eventListenerAdded){
            this.eventListenerAdded = true;
            this.addEventListener("click", this.clickHandler, true)
        }
    }

    clickHandler(e){
        if(e.target.tagName.toLowerCase() == "input")//click hiisen element ni input baival
        {
            let eventName = "like-btn-disliked";
            if(e.target.checked){
                eventName = "like-btn-liked";
            }
            // Etseg element buyyu card-rii shidne
            const event = new Event(eventName, {
                bubbles: true,
                capture: true,
                composed: true
            });
            this.parentElement.dispatchEvent(event);
            console.log("tsatsagdlaa");
        }
    }
}

window.customElements.define('idy-like-btn', likeBtn);