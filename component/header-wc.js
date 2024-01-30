class Headercomponent extends HTMLElement {
    constructor() {
      super();
      this.#render();
    }
  
  
    #render() {
      this.innerHTML = `
      <header>
        <a class="logo"  href="homepage.html" ><img class="logoImg" src="/accest/logo.svg" alt="logoImg"></a>
        <cart-wc></cart-wc>
        <nav class="nevtreh">
            <button type="button" class="nevtreh">Нэвтрэх</button>
        </nav>  
      </header>
      `;
    }
  }
  
  window.customElements.define("header-component", Headercomponent);