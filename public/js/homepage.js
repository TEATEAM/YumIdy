fetch(`http://localhost:3000/restaurants`).then(response => {
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonData = response.json();
    return jsonData;
}).then(resData => {        
    display(resData);       
}).catch(error => {
    console.error("Error fetching restaurant details:", error.message);
})

//Delgerengui medeelliig delgetsleh
function display(resData) {
    console.log(resData[0].stars);
    document.querySelector('.bestR').innerHTML =
        `<idy-card id="${resData[0].id}" img="${resData[0].img}" name="${resData[0].name}" type="${resData[0].tag}" time="${resData[0].openingHours}" price="Cheap-eats" star="${resData[0].stars}"></idy-card>
        <idy-card id="${resData[1].id}" img="${resData[1].img}" name="${resData[1].name}" type="${resData[1].tag}" time="${resData[1].openingHours}" price="Mid-range" star="${resData[1].stars}"></idy-card>
        <idy-card id="${resData[2].id}" img="${resData[2].img}" name="${resData[2].name}" type="${resData[2].tag}" time="${resData[2].openingHours}" price="Fine-dining" star="${resData[2].stars}"></idy-card>
        <idy-card id="${resData[3].id}" img="${resData[3].img}" name="${resData[3].name}" type="${resData[3].tag}" time="${resData[3].openingHours}" price="Mid-range" star="${resData[3].stars}"></idy-card>
        <idy-card id="${resData[4].id}" img="${resData[4].img}" name="${resData[4].name}" type="${resData[4].tag}" time="${resData[4].openingHours}" price="Cheap-eats" star="${resData[4].stars}"></idy-card>
        <idy-card id="${resData[5].id}" img="${resData[5].img}" name="${resData[5].name}" type="${resData[5].tag}" time="${resData[5].openingHours}" price="Mid-range" star="4"></idy-card>
        `  
}
fetch(`http://localhost:3000/comments`).then(response => {
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonData = response.json();
    return jsonData;
}).then(comData => {        
    displayCom(comData);       
}).catch(error => {
    console.error("Error fetching comment details:", error.message);
})

//Delgerengui medeelliig delgetsleh
function displayCom(comData) {
    const commentSection = document.querySelector('.recentR');
    var average_rating1 = (comData[0].star1 + comData[0].star2 + comData[0].star3)/3;
    var average_rating2 = (comData[1].star1 + comData[1].star2 + comData[1].star3)/3;

    let commenthmtl=
        `
        <article>
            <div class="reviewer" >
                <img src="./accest/girl.png" alt="reviewer">
                <h3>Зулаа Ариунаа</h3>
            </div>
            <div class="review-main">
                <div class="rating-report">
                    <!--review star, date time, report-->
                    <review-star-wc rating="${average_rating1}" ratingID="Review-rating${comData[0].commentId}"></review-star-wc>   
                    <button type="button" name="report">
                        <i class="fa-regular fa-flag" style="font-size: 15px; color: #ee5151;"></i>        
                    </button>
                </div>
                <p>${comData[0].setgegdel}</p>
                <div class="comment-reaction">
                    <label for="like1" class="like-label">
                        <span>23</span> 
                        <svg class="like-btn" width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 10.8259C23 10.2955 22.7893 9.78679 22.4142 9.41171C22.0391 9.03664 21.5304 8.82593 21 8.82593H14.68L15.64 4.25593C15.66 4.15593 15.67 4.04593 15.67 3.93593C15.67 3.52593 15.5 3.14593 15.23 2.87593L14.17 1.82593L7.59 8.40593C7.22 8.77593 7 9.27593 7 9.82593V19.8259C7 20.3564 7.21071 20.8651 7.58579 21.2401C7.96086 21.6152 8.46957 21.8259 9 21.8259H18C18.83 21.8259 19.54 21.3259 19.84 20.6059L22.86 13.5559C22.95 13.3259 23 13.0859 23 12.8259V10.8259ZM1 21.8259H5V9.82593H1V21.8259Z"/>
                        </svg>                         
                        <input type="radio" id="like1" name="likedislike1" >
                    </label>
                    <label for="dislike1" class="dislike-label">
                        <svg class="dislike-btn" width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.46094 14.988C1.46094 15.5185 1.67165 16.0272 2.04672 16.4023C2.4218 16.7773 2.9305 16.988 3.46094 16.988L9.78094 16.988L8.82094 21.558C8.80094 21.658 8.79094 21.768 8.79094 21.878C8.79094 22.288 8.96094 22.668 9.23094 22.938L10.2909 23.988L16.8709 17.408C17.2409 17.038 17.4609 16.538 17.4609 15.988V5.98804C17.4609 5.4576 17.2502 4.9489 16.8752 4.57382C16.5001 4.19875 15.9914 3.98804 15.4609 3.98804L6.46094 3.98804C5.63094 3.98804 4.92094 4.48804 4.62094 5.20804L1.60094 12.258C1.51094 12.488 1.46094 12.728 1.46094 12.988V14.988ZM23.4609 3.98804H19.4609L19.4609 15.988H23.4609L23.4609 3.98804Z"/>
                        </svg> 
                        <span>2</span>   
                        <input type="radio" id="dislike1" name="likedislike1">
                    </label>
                </div>
            </div>
        </article>`
    
    commentSection.insertAdjacentHTML("beforeend", commenthmtl);
    commenthmtl=
        `
        <article>
            <div class="reviewer" >
                <img src="./accest/girl.png" alt="reviewer">
                <h3>Зулаа Ариунаа</h3>
            </div>
            <div class="review-main">
                <div class="rating-report">
                    <!--review star, date time, report-->
                    <review-star-wc rating="${average_rating2}" ratingID="Review-rating${comData[1].commentId}"></review-star-wc>   
                    <button type="button" name="report">
                        <i class="fa-regular fa-flag" style="font-size: 15px; color: #ee5151;"></i>        
                    </button>
                </div>
                <p>${comData[1].setgegdel}</p>
                <div class="comment-reaction">
                    <label for="like1" class="like-label">
                        <span>23</span> 
                        <svg class="like-btn" width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 10.8259C23 10.2955 22.7893 9.78679 22.4142 9.41171C22.0391 9.03664 21.5304 8.82593 21 8.82593H14.68L15.64 4.25593C15.66 4.15593 15.67 4.04593 15.67 3.93593C15.67 3.52593 15.5 3.14593 15.23 2.87593L14.17 1.82593L7.59 8.40593C7.22 8.77593 7 9.27593 7 9.82593V19.8259C7 20.3564 7.21071 20.8651 7.58579 21.2401C7.96086 21.6152 8.46957 21.8259 9 21.8259H18C18.83 21.8259 19.54 21.3259 19.84 20.6059L22.86 13.5559C22.95 13.3259 23 13.0859 23 12.8259V10.8259ZM1 21.8259H5V9.82593H1V21.8259Z"/>
                        </svg>                         
                        <input type="radio" id="like1" name="likedislike1" >
                    </label>
                    <label for="dislike1" class="dislike-label">
                        <svg class="dislike-btn" width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.46094 14.988C1.46094 15.5185 1.67165 16.0272 2.04672 16.4023C2.4218 16.7773 2.9305 16.988 3.46094 16.988L9.78094 16.988L8.82094 21.558C8.80094 21.658 8.79094 21.768 8.79094 21.878C8.79094 22.288 8.96094 22.668 9.23094 22.938L10.2909 23.988L16.8709 17.408C17.2409 17.038 17.4609 16.538 17.4609 15.988V5.98804C17.4609 5.4576 17.2502 4.9489 16.8752 4.57382C16.5001 4.19875 15.9914 3.98804 15.4609 3.98804L6.46094 3.98804C5.63094 3.98804 4.92094 4.48804 4.62094 5.20804L1.60094 12.258C1.51094 12.488 1.46094 12.728 1.46094 12.988V14.988ZM23.4609 3.98804H19.4609L19.4609 15.988H23.4609L23.4609 3.98804Z"/>
                        </svg> 
                        <span>2</span>   
                        <input type="radio" id="dislike1" name="likedislike1">
                    </label>
                </div>
            </div>
        </article>`
    
    commentSection.insertAdjacentHTML("beforeend", commenthmtl);
    
}

