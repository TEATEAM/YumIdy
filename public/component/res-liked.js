class ResLiked extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" 
        crossorigin="anonymous" 
        referrerpolicy="no-referrer" 
        />
        <link rel="stylesheet" href="./css/resCard.css">
        <link rel="stylesheet" href="./css/card-container.css">
        <div class="card-container-1" id = "cards-container"></div>
        `;
    }

    connectedCallback() {
        this.readFromLocalStorage();
    }
    readFromLocalStorage() {
        // cart gesen key tulhuur ugiig ashiglan localStoraged hadgalsan 
        const resList = JSON.parse(localStorage.getItem("cart"));
        if(resList == null || resList.length === 0){
            const cont = this.shadowRoot.getElementById("cards-container");
            cont.innerHTML = `<h3>Дуртай ресторан байхгүй байна! </h3>`
            cont.style = "display: flex; justify-content: center; color:var(--color-text); gap: 0.5rem; font-size: 1.2rem; margin-top: 5rem;";
            return;
        }

        const container = this.shadowRoot.getElementById("cards-container");
        container.innerHTML = "";

        for (let i = 0; i < resList.length ; i++){
            const restaurant = resList[i];

            const resCard = document.createElement("idy-card");
            resCard.setAttribute("id", restaurant.id);
            resCard.setAttribute("name", restaurant.name);
            resCard.setAttribute("img", restaurant.img);
            resCard.setAttribute("type", restaurant.type);
            resCard.setAttribute("time", restaurant.time);
            resCard.setAttribute("price", restaurant.price);
            resCard.setAttribute("star", restaurant.star);

            const removeBtn = document.createElement('p');
            removeBtn.setAttribute("slot", "remove");
            // removeBtn.setAttribute("id", "close");
            removeBtn.innerHTML = `&times;`;

            resCard.appendChild(removeBtn);

            removeBtn.style = "color: white; position: absolute; top: 9.2rem; right: 1rem; font-size: 1.2rem;";

            removeBtn.addEventListener('click', (e) => {
                // x button deer darah uyd alga bolno gehdee davhar daragdahaas sergiildeg.
                e.stopPropagation();

                //ner bolon indexeer ni haij ustgah 
                this.removeFromStorage(i,restaurant.name);

                this.readFromLocalStorage();
                location.reload();
            });

            removeBtn.onmouseover = function () {
                removeBtn.style.color="var(--color-text)";
            };
            
            removeBtn.onmouseout = function () {
                removeBtn.style.color="var(--color-text)";
            };
            container.appendChild(resCard);
        }
    }

    removeFromStorage(index, resName){
        const resList = JSON.parse(localStorage.getItem("cart")) || [];
        // resList-s 1 elementiig index-r n olj ustgah
        resList.splice(index, 1);

        localStorage.removeItem(`${resName}`);

        localStorage.setItem("cart", JSON.stringify(resList));
    }
}

window.customElements.define('res-liked', ResLiked);