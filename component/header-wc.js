class HeaderWc extends HTMLElement {
    constructor() {
        super();
        this.#render();
    }

    connectedCallback() {
        //implementation
    }
    #render(){
        this.innerHTML ='<header>
       <!--  logo heseg -->
            <a class="logo"  href="homepage.html" ><img class="logoImg" src="/accest/logo.svg" alt="logoImg"></a>
            <!--  suuderleh zuraas -->
            
            <!-- nevtreh hesgiin button -->
            <nav class="nevtreh">
                <button type="button" class="nevtreh">Нэвтрэх</button>
            </nav>  
        </header>'
    }

    attributeChangedCallback(name, oldVal, newVal) {
        //implementation
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('header-wc', HeaderWc);