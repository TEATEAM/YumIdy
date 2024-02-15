document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const resId = urlParams.get("id"); //url-s resiin id-g avna 

    //delgerengui medeelliig id-aar ni avah
    fetch(`http://localhost:3000/restaurants/${resId}`).then(response => {
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = response.json();
        // console.log(jsonData);
        return jsonData;
    }).then(resData => {        
        displayDetails(resData);
        writeReview(resId);
        getComments(resId);        
    }).catch(error => {
        console.error("Error fetching restaurant details:", error.message);
    })
});

//Delgerengui medeelliig delgetsleh
function displayDetails(resData) {
    document.querySelector('main').innerHTML =
        `<!--Restaurantiin medeellin heseg-->
        <div class="Restaurant-info">
            <!--Restaurant name, buttons geed header heseg-->
            <section class="Restaurant-header">
                <div class="res_main">
                    <h2 class="Restaurant-name">${resData[0].name}</h2>
                    <!--reviewstars-->
                    <review-star-wc rating="${resData[0].stars}" ratingID="Restaurant-rating" class="restaurant-star"></review-star-wc>
                </div>
                <div class="res_icons">
                    <!--wishlistiin zurh-->
                    <label for="heart-checkbox" class="heart-label">
                        <svg class="heart" width="35" height="32" viewBox="0 0 34 32"  xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_600_1843)">
                            <path d="M10.5121 4.3279C11.8452 4.11558 13.2123 4.18562 14.5126 4.53285C15.813 4.88008 17.0133 5.49565 18.0253 6.33418L18.081 6.38064L18.1322 6.33841C19.098 5.54617 20.2335 4.95554 21.4628 4.60594C22.6921 4.25634 23.9871 4.15579 25.2613 4.31101L25.6318 4.36169C27.238 4.6209 28.7392 5.28128 29.9766 6.27289C31.2139 7.26451 32.1414 8.55045 32.6607 9.99453C33.18 11.4386 33.2718 12.9871 32.9265 14.476C32.5811 15.9649 31.8114 17.3387 30.6989 18.4521L30.4277 18.7126L30.3554 18.7703L19.1339 29.1593C18.8749 29.3989 18.5318 29.5426 18.1682 29.5638C17.8046 29.5851 17.445 29.4824 17.1562 29.2748L17.0146 29.1593L5.72825 18.7098C4.53262 17.6224 3.68231 16.2469 3.27149 14.7356C2.86067 13.2243 2.90538 11.6363 3.40067 10.1473C3.89595 8.65828 4.82248 7.32648 6.07764 6.29937C7.3328 5.27225 8.86761 4.58991 10.5121 4.3279Z"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_600_1843">
                            <rect width="36.15" height="33.79" />
                            </clipPath>
                            </defs>
                        </svg>                          
                        <input name="heart-checkbox" id="heart-checkbox" type="checkbox">
                    </label>
                    <!--shareiin button-->
                    <button class="share">
                        <i class="fa-solid fa-share-nodes" style="font-size: 32px; color: #fff;"></i>
                    </button> 
                </div>   
            </section>
            <!--Restaurant main heseg-->
            <section id="Restaurant-overview">
                <!--Restaurantiin hayg gm details heseg-->
                <section class="Restaurant-details">
                    <h3>Дэлгэрэнгүй</h3>
                    <ul>
                        <li>
                            <p>Хоолны төрөл</p>
                            <span>
                                <em>${resData[0].tag}</em>
                            </span>
                        </li>
                        <li>
                            <p>Хоолнууд</p>
                            <span>Lunch, Dinner</span>
                        </li>
                        <li>
                            <p>Онцлог</p>
                            <span>Free wifi, Takeout, Seating</span>
                        </li>
                        <li>
                            <review-star-wc rating="${resData[0].stars}" ratingID="food-rating" labelinput="Хоол"></review-star-wc>
                        </li>
                        <li>
                            <review-star-wc rating="${resData[0].stars}" ratingID="service-rating" labelinput="Үйлчилгээ"></review-star-wc>
                        </li>
                        <li>
                            <review-star-wc rating="${resData[0].stars}" ratingID="atmosphere-rating" labelinput="Орчин"></review-star-wc>
                        </li>
                        <li>
                            <div class="rt-location">
                                <a href="https://www.google.com/maps/" target="_blank">
                                    <i class="fa-sharp fa-solid fa-location-dot" style="color: #988e8e;"></i>
                                    403, 4th floor, Shangrila-Mall, olympic Stress Sukhbaatar district, Ulaanbaatar Mongolia
                                </a>
                            </div>
                            <div class="rt-contact">
                                <a href="https://www.facebook.com" target="_blank">
                                    <i class="fa-solid fa-link" style="color: #988e8e;"></i>
                                    Website
                                </a>
                                <a href="mailto:contact@example.com" target="_blank">
                                    <i class="fa-regular fa-envelope" style="color: #988e8e;"></i>
                                    Email
                                </a>
                            </div>
                            <div class="rt-phone" >
                                <a href="tel:+97677777777" target="_blank">
                                    <i class="fa-solid fa-phone" style="color: #988e8e;"></i>
                                    +976 7777 7777
                                </a>
                            </div>
                        </li>
                    </ul>
                </section>
                <!--Restaurantiin zuragnuud-->
                <section class="Restaurant-images">
                    <img class="img-big" src="${resData[0].img}" alt="restaurant page images" ></li>
                    <div class="img-small">
                        <div class="img-up">
                            <img  src="./accest/img1.png" alt="restaurant page images" >
                            <img  src="./accest/img2.png" alt="restaurant page images" >                  
                        </div>
                        <div class="img-down">
                            <img  src="./accest/img3.png" alt="restaurant page images" >
                            <img  src="./accest/img4.png" alt="restaurant page images" >
                        </div>    
                    </div>    
                </section>
            </section>
        </div>
        <!--Ene restaurantiin review heseg-->
        <section class="Reviews">
            <!--reviewiin deedtliin heseg-->
            <div class="review-header">
                <h2>Нийт санал</h2>
                <button id="writeReview">Санал өгөх</button> 
            </div>
            <div class="line"></div>
            <!-- writereview modalbox -->
            <div id="modalbox" class="modal">
                <section class="left">
                    <p>Таны зочилсон газар ямархуу байв?</p>
                    <img src="${resData[0].img}" alt="restaurant img of ${resData[0].name}">
                    <h1>${resData[0].name}</h1>
                </section>
                <section class="right">
                    <form class="comment-form">
                        <h4>Таны хоол таалагдсан уу?</h4>
                        <div class="star-radio" id="food">
                            <input class="radio-input" type="radio" id="star5-food" name="food" value="5" />
                            <label class="radio-label" for="star5-food" title="5 stars">5 stars</label>
                        
                            <input class="radio-input" type="radio" id="star4-food" name="food" value="4" />
                            <label class="radio-label" for="star4-food" title="4 stars">4 stars</label>
                        
                            <input class="radio-input" type="radio" id="star3-food" name="food" value="3" />
                            <label class="radio-label" for="star3-food" title="3 stars">3 stars</label>
                        
                            <input class="radio-input" type="radio" id="star2-food" name="food" value="2" />
                            <label class="radio-label" for="star2-food" title="2 stars">2 stars</label>
                        
                            <input class="radio-input" type="radio" id="star1-food" name="food" value="1" />
                            <label class="radio-label" for="star1-food" title="1 star">1 star</label>
                        </div>
                        <h4>Таны ая тухтай байдлыг хангаж чадсан уу?</h4>
                        <div class="star-radio" id="atmosphere">
                            <input class="radio-input" type="radio" id="star5-atmosphere" name="atmosphere" value="5" />
                            <label class="radio-label" for="star5-atmosphere" title="5 stars">5 stars</label>
                        
                            <input class="radio-input" type="radio" id="star4-atmosphere" name="atmosphere" value="4" />
                            <label class="radio-label" for="star4-atmosphere" title="4 stars">4 stars</label>
                        
                            <input class="radio-input" type="radio" id="star3-atmosphere" name="atmosphere" value="3" />
                            <label class="radio-label" for="star3-atmosphere" title="3 stars">3 stars</label>
                        
                            <input class="radio-input" type="radio" id="star2-atmosphere" name="atmosphere" value="2" />
                            <label class="radio-label" for="star2-atmosphere" title="2 stars">2 stars</label>
                        
                            <input class="radio-input" type="radio" id="star1-atmosphere" name="atmosphere" value="1" />
                            <label class="radio-label" for="star1-atmosphere" title="1 star">1 star</label>
                        </div>
                        <h4>Үйлчилгээ нь ямархуу байсан бэ?</h4>
                        <div class="star-radio" id="service">
                            <input class="radio-input" type="radio" id="star5-service" name="service" value="5"/>
                            <label class="radio-label" for="star5-service" title="5 stars" for="service">5 stars</label>
                        
                            <input class="radio-input" type="radio" id="star4-service" name="service" value="4" />
                            <label class="radio-label" for="star4-service" title="4 stars" for="service">4 stars</label>
                        
                            <input class="radio-input" type="radio" id="star3-service" name="service" value="3" />
                            <label class="radio-label" for="star3-service" title="3 stars" for="service">3 stars</label>
                        
                            <input class="radio-input" type="radio" id="star2-service" name="service" value="2" />
                            <label class="radio-label" for="star2-service" title="2 stars" for="service">2 stars</label>
                        
                            <input class="radio-input" type="radio" id="star1-service" name="service" value="1" />
                            <label class="radio-label" for="star1-service" title="1 star" for="service">1 star</label>
                        </div>
                        <label for="comment" class="setgegdel">Сэтгэгдэл бичих:</label>
                        <input type="text" name="comment" id ="comment" placeholder="Энд бичээрэй"/>
                        <input type="submit" id = "commentBtn" value="Илгээх"/>
                    </form>
                </section>
                <span id="closeModal" class="close-button">&times;</span>
            </div>
            <div class="line"></div>
            <!--niit sanaliin medeelel, hailt hiih, sortloh-->
            <section class="review-sort-filters">    
                <div class="review-progress">
                    <ul>
                        <li>
                            <review-star-wc rating="5" ratingID="stars5"></review-star-wc>
                            <label for="starsreviews5">
                                <progress id="starsreviews5" value="30" max="100"></progress>
                            </label>                    
                        </li>
                        <li>
                            <review-star-wc rating="4" ratingID="stars4"></review-star-wc> 
                            <label for="starsreviews4">
                            <progress id="starsreviews4" value="35"  max="100"></progress>
                            </label>
                        </li>
                        <li>
                            <review-star-wc rating="3" ratingID="stars3"></review-star-wc>    
                            <label for="starsreviews3">
                                <progress id="starsreviews3" value="0" max="100"></progress>
                            </label>            
                        </li>
                        <li>
                            <review-star-wc rating="2" ratingID="stars2"></review-star-wc>   
                            <label for="starsreviews2">
                                <progress id="starsreviews2" value="23"  max="100"></progress>
                            </label>
                        </li>
                        <li>
                            <review-star-wc rating="1" ratingID="stars1"></review-star-wc>   
                            <label for="starsreviews1">
                                <progress id="starsreviews1" value="0"  max="100"></progress>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="search-sort">
                    <label for="searchReview">
                        <input type="text" placeholder="Санал хайх" id="searchReview">
                    </label>
                    <label for="sort">
                        <select name="sort" id="sort">
                        <option value="DateFirst">Шинэ нь эхэндээ</option>
                        <option value="DateLast">Хуучин нь эхэндээ</option>
                        <option value="DetailFirst">Нарийвчлалтай нь эхэндээ</option>
                        <option value="DetailLast">Нарийвчлалгүй нь эхэндээ</option>
                        </select>
                    </label>
                </div>
            </section>
            <div class="comment-section">
            </div>
        </section>`;
        // modal boxiin js bichiv
        const openModalButton = document.getElementById('writeReview');
        const closeModalButton = document.getElementById('closeModal');
        const modalbox = document.getElementById('modalbox');

        openModalButton.addEventListener('click', ()=>{
            modalbox.style.display = 'flex';
        });

        closeModalButton.addEventListener('click', ()=>{
            modalbox.style.display = 'none';
        });
        modalbox.addEventListener('click', (event)=>{
            if(event.target === modalbox){
                modalbox.style.display = 'none';
            }
        });
        // console.log(resData);
  }

//review bichih
function writeReview(resId){
  const commentForm = document.querySelector('.comment-form');

            commentForm.addEventListener('submit', (event) => {
                event.preventDefault();//

                var food_rating, atmosphere_rating, service_rating,i;
                var radio = document.getElementsByName('food');
                for (i = 0; i < radio.length; i++) {
                    if (radio[i].checked)
                        food_rating = radio[i].value;
                }
                radio = document.getElementsByName('atmosphere');
                for (i = 0; i < radio.length; i++) {
                    if (radio[i].checked)
                        atmosphere_rating = radio[i].value;
                }
                radio = document.getElementsByName('service');
                for (i = 0; i < radio.length; i++) {
                    if (radio[i].checked)
                        service_rating = radio[i].value;
                }
    
                const commentInput = document.getElementById('comment').value;
                console.log(commentInput); 

                if (commentInput !== ''&& food_rating !== undefined&& atmosphere_rating !== undefined&& service_rating !== undefined) {//hoooson bish bol
                    const commentData = { //commentiin datag ugnu
                        star1: food_rating,
                        star2: atmosphere_rating,
                        star3: service_rating,
                        setgegdel: commentInput,
                        resId: resId,
                    };
                    console.log("fhaha");
                    fetch('http://localhost:3000/writecomment', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(commentData)
                    }).then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    }).then(responseData => {
                        console.log('Comment posted successfully:', responseData);
                        alert("Comment posted successfully");
                        getComments(resId);
                        window.location.href = URLSearchParams(window.location.search);
                    }).catch(error => {
                        console.error("Error posting comment:", error.message);
                    });
                }
                else{
                    alert("Талбараа бүрэн бөглөөрэй");
                }
            });
}

//Resiin id-aar ni commentuudiin jagsaaltiig avah
function getComments(resId) {
  fetch(`http://localhost:3000/comments/${resId}`)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then(comments => {
          displayComments(comments);
      })
      .catch(error => {
          console.error("Error fetching comments:", error.message);
      });
}


//Commentiig display hiih
function displayComments(comments) {
    const commentSection = document.querySelector('.comment-section');
    commentSection.innerHTML = '';
    comments.forEach(comment =>{
        var average_rating = (comment.star1 + comment.star2 + comment.star3)/3;
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
                    <review-star-wc rating="${average_rating}" ratingID="Review-rating${comment.commentId}"></review-star-wc>   
                    <button type="button" name="report">
                        <i class="fa-regular fa-flag" style="font-size: 15px; color: #ee5151;"></i>        
                    </button>
                </div>
                <p>${comment.setgegdel}</p>
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
        commentSection.insertAdjacentHTML("afterbegin", commenthmtl);
    });
}