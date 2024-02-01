class addtoCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                .cardInfo{
                    display: flex;
                    justify-content: space-evenly;
                    & .resName{
                        width:18rem;
                        font-family: var("Quicksand-Medium");
                        font-size: 1.125rem;
                        font-style: normal;
                        font-weight: 700;
                        line-height:2rem; /* 133.333% */
                        letter-spacing: 0.00625rem;
                        color: var(--color-text);
                    }
                    & .heart-checkbox{
                    margin-top: 0.5rem ;
                    }
                    & .heart-checkbox :hover{
                        color: red;
                    }
                }
            </style>
            <link rel="stylesheet" href=../homepage.css/>
            <div class="heart-checkbox">
                <input type="checkbox" id="heart"/>
                <label for="heart"><i class="fa-solid fa-heart"></i></label>
            </div>
            `
        }

        connectedCallback() {
            this.addEventListener('click', () => {
                const resName = this.closest('idy-like-btn');
            })
        }
}