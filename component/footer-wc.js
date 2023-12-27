class Footercomponent extends HTMLElement {
    constructor() {
        super();
        this.#render();
    }

    connectedCallback() {

    }

    #render() {
        this.innerHTML =`
        <footer>
       
      <nav class="footer"  >
         
          <a href="https://www.facebook.com" class="fb">
              <i class="fa-brands fa-facebook-f"></i> </a>
  
  
          <a href="https://www.twitter.com" class="twitter" >
              <i class="fa-brands fa-twitter"></i> </a>
  
  
          <a href="https://www.instagram.com" class="insta">
              <i class="fa-brands fa-instagram"></i> </a>
          
      </nav>
      
      <article class="end">
         
          &copy; 2023 <span style="color:#EE5151;">Yum</span>idy. All Rights Reserved.
      </article>
  
  </footer>
        `
    }
}

window.customElements.define('footer-component', Footercomponent);