class Footercomponent extends HTMLElement {
    constructor() {
        super();
        this.#render();
    }
    #render() {
        this.innerHTML =`
        <style>
            footer{
                width: 100%;
                height: 7rem;
                background: #0F0F0F;
                box-shadow: 0px 4px 10px 0px rgba(240, 251, 255, 0.20) inset;
                display: grid;
                place-items: center;
                padding: 1rem;

                & nav{
                    display: flex;
                    justify-content: space-between;
                    width: 6rem;
                    align-items: center;
                    font-size: 1rem;
                    color: var(--color-text);     
                    & a{
                        color: var(--color-text);
                        & :hover{
                            color: var(--color-accent);
                        }
                    }
                }
                & p .end{
                    font: var(--p-font);
                    color: var( --color-text);
                    cursor: pointer;
                } 
            }
        </style>
        <footer>
            <nav class="footer">       
                <a href="https://www.facebook.com" class="fb">
                    <i class="fa-brands fa-facebook-f"></i> </a>
        
                <a href="https://www.twitter.com" class="twitter" >
                    <i class="fa-brands fa-twitter"></i> </a>
        
                <a href="https://www.instagram.com" class="insta">
                    <i class="fa-brands fa-instagram"></i> </a>
            </nav>
            <p class="end">
                &copy; 2023 <span style="color:#EE5151;">Yum</span>idy. All Rights Reserved.
            </p>
        </footer>`
    }
}

window.customElements.define('footer-component', Footercomponent);