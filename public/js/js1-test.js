class Restaurant {
    //constuctor
    constructor(restaurant) {
        this.id = restaurant.id;
        this.name = restaurant.name;
        this.stars = restaurant.stars;
        this.rank = restaurant.rank;
        this.openingHours = restaurant.openingHours;
        this.description = restaurant.description;
        this.price = restaurant.price;
        this.type = restaurant.type; 
    }
    //build & return
    render() {
        return `
            <article id="restaurant_${this.id}">
                <img src="/accest/restaurantpage${this.id}.png" alt="restaurantpage${this.id}">
                <h2 class="resName">${this.name}</h2>
                <review-star-wc rating="${restaurant.stars}" ratingID="restaurant${this.id}"></review-star-wc>
                <script type="module" src="/component/review-star-wc.js"></script>
                <div class="paragraphs">
                    <p>#${this.rank} of 300</p>
                    <p>${this.openingHours}</p>
                    <p>${this.description}</p>
                </div>
            </article>`;
    }
    //home page deer garah restaurantiin medeelel
    renderOnHomepage(){
        return `
            <article id="restaurant_${this.id}">
                <img src="/accest/restaurantpage${this.id}.png" alt="restaurantpage${this.id}">
                <h2 class="resName">${this.name}</h2>
                <div class="paragraphs">
                    <p>Closed</p>
                    <p>${this.price}</p>
                </div>
                <em>${this.type}</em>
                <label for="stars${this.stars}">
                <meter id="stars${this.stars}" class="star-rating" min="0" max="5" value="${this.stars}" title="${restaurant.stars} out of 5 stars"></meter>
                </label> 
            </article>`;
    }
    //objectiin [property]-g uurchluh
    bind(eventType, element, property) { 
        
        gebi(`${element}_${this.id}`).addEventListener(eventType, (event) => {
            
            //this[property] used to access the object's property.
            //for example this["title"]
            //event.target gets <h1> element in our example
            this[property] = event.target.innerHTML;
            recentNews._hasChanged = true;
            console.log(`event:${event} this=${JSON.stringify(Restaurants)}`);
        })
        return this;
    }
}
class App{
    constructor(targetId){
        this.targetId = targetId;
        this.restaurantData = [
            {
             "catagoryID": 1,
             "catagoryName": "Meals",
             "subcat":[
                 {
                     "subcatId":1.1,
                     "subcatName":"Breakfast",
                     "restaurants":[
                         {
                             "id": 1,
                             "name": "Royal Sushi House",
                             "stars": 4,
                             "rank": 1,
                             "openingHours": "11am-22am",
                             "description": "Best Sushi House in Ub"
                           },
                           {
                             "id": 2,
                             "name": "Burgers & Pizza",
                             "stars": 3,
                             "rank": 5,
                             "openingHours": "12pm-23pm",
                             "description": "Best burger and pizza in town"
                           }
                     ]
                 },
                 {
                     "subcatId":1.2,
                     "subcatName":"Lunch",
                     "restaurants":[
                         {
                             "id": 1,
                             "name": "Royal Sushi House",
                             "stars": 4,
                             "rank": 1,
                             "openingHours": "11am-22am",
                             "description": "Best Sushi House in Ub"
                           },
                           {
                             "id": 2,
                             "name": "Burgers & Pizza",
                             "stars": 3,
                             "rank": 5,
                             "openingHours": "12pm-23pm",
                             "description": "Best burger and pizza in town"
                           }
                     ]
                 },
                 {
                     "subcatId":1.3,
                     "subcatName":"Dinner",
                     "restaurants":[
                         {
                             "id": 1,
                             "name": "Royal Sushi House",
                             "stars": 4,
                             "rank": 1,
                             "openingHours": "11am-22am",
                             "description": "Best Sushi House in Ub"
                           },
                           {
                             "id": 2,
                             "name": "Burgers & Pizza",
                             "stars": 3,
                             "rank": 5,
                             "openingHours": "12pm-23pm",
                             "description": "Best burger and pizza in town"
                           }
                     ]
                 }
             ]
            }, 
            {
             "catagoryID": 2,
             "catagoryName": "Price",
             "subcat":[
                 {
                     "subcatId":2.1,
                     "subcatName":"Cheap-eats",
                     "restaurants":[
                         {
                             "id": 1,
                             "name": "Royal Sushi House",
                             "stars": 4,
                             "rank": 1,
                             "openingHours": "11am-22am",
                             "description": "Best Sushi House in Ub"
                           },
                           {
                             "id": 2,
                             "name": "Burgers & Pizza",
                             "stars": 3,
                             "rank": 5,
                             "openingHours": "12pm-23pm",
                             "description": "Best burger and pizza in town"
                           }
                     ]
                 },
                 {
                     "subcatId":2.2,
                     "subcatName":"Mid-range",
                     "restaurants":[
                         {
                             "id": 1,
                             "name": "Royal Sushi House",
                             "stars": 4,
                             "rank": 1,
                             "openingHours": "11am-22am",
                             "description": "Best Sushi House in Ub"
                           },
                           {
                             "id": 2,
                             "name": "Burgers & Pizza",
                             "stars": 3,
                             "rank": 5,
                             "openingHours": "12pm-23pm",
                             "description": "Best burger and pizza in town"
                           }
                     ]
                 },
                 {
                     "subcatId":2.3,
                     "subcatName":"Fine-Dinning",
                     "restaurants":[
                         {
                             "id": 1,
                             "name": "Royal Sushi House",
                             "stars": 4,
                             "rank": 1,
                             "openingHours": "11am-22am",
                             "description": "Best Sushi House in Ub"
                           },
                           {
                             "id": 2,
                             "name": "Burgers & Pizza",
                             "stars": 3,
                             "rank": 5,
                             "openingHours": "12pm-23pm",
                             "description": "Best burger and pizza in town"
                           }
                     ]
                 }
             ]
            }, 
            {
             "catagoryID": 3,
             "catagoryName": "Cuisines",
             "subcat":[
                 {
                     "subcatId":3.1,
                     "subcatName":"Mongolian",
                     "restaurants":[
                         {
                             "id": 1,
                             "name": "Royal Sushi House",
                             "stars": 4,
                             "rank": 1,
                             "openingHours": "11am-22am",
                             "description": "Best Sushi House in Ub"
                           },
                           {
                             "id": 2,
                             "name": "Burgers & Pizza",
                             "stars": 3,
                             "rank": 5,
                             "openingHours": "12pm-23pm",
                             "description": "Best burger and pizza in town"
                           }
                     ]
                 },
                 {
                     "subcatId":3.2,
                     "subcatName":"Asian",
                     "restaurants":[
                         {
                             "id": 1,
                             "name": "Royal Sushi House",
                             "stars": 4,
                             "rank": 1,
                             "openingHours": "11am-22am",
                             "description": "Best Sushi House in Ub"
                           },
                           {
                             "id": 2,
                             "name": "Burgers & Pizza",
                             "stars": 3,
                             "rank": 5,
                             "openingHours": "12pm-23pm",
                             "description": "Best burger and pizza in town"
                           }
                     ]
                 },
                 {
                     "subcatId":3.3,
                     "subcatName":"European",
                     "restaurants":[
                         {
                             "id": 1,
                             "name": "Royal Sushi House",
                             "stars": 4,
                             "rank": 1,
                             "openingHours": "11am-22am",
                             "description": "Best Sushi House in Ub"
                           },
                           {
                             "id": 2,
                             "name": "Burgers & Pizza",
                             "stars": 3,
                             "rank": 5,
                             "openingHours": "12pm-23pm",
                             "description": "Best burger and pizza in town"
                           }
                     ]
                 },
                 {
                     "subcatId":3.4,
                     "subcatName":"American",
                     "restaurants":[
                         {
                             "id": 1,
                             "name": "Royal Sushi House",
                             "stars": 4,
                             "rank": 1,
                             "openingHours": "11am-22am",
                             "description": "Best Sushi House in Ub"
                           },
                           {
                             "id": 2,
                             "name": "Burgers & Pizza",
                             "stars": 3,
                             "rank": 5,
                             "openingHours": "12pm-23pm",
                             "description": "Best burger and pizza in town"
                           }
                     ]
                 }
             ]
            }, 
            {
             "catagoryID": 4,
             "catagoryName": "Dishes",
             "subcat":[
                 {
                     "subcatId":4.1,
                     "subcatName":"Salad",
                     "restaurants":[
                         {
                             "id": 1,
                             "name": "Royal Sushi House",
                             "stars": 4,
                             "rank": 1,
                             "openingHours": "11am-22am",
                             "description": "Best Sushi House in Ub"
                           },
                           {
                             "id": 2,
                             "name": "Burgers & Pizza",
                             "stars": 3,
                             "rank": 5,
                             "openingHours": "12pm-23pm",
                             "description": "Best burger and pizza in town"
                           }
                     ]
                 },
                 {
                     "subcatId":4.2,
                     "subcatName":"Burger",
                     "restaurants":[
                         {
                             "id": 1,
                             "name": "Royal Sushi House",
                             "stars": 4,
                             "rank": 1,
                             "openingHours": "11am-22am",
                             "description": "Best Sushi House in Ub"
                           },
                           {
                             "id": 2,
                             "name": "Burgers & Pizza",
                             "stars": 3,
                             "rank": 5,
                             "openingHours": "12pm-23pm",
                             "description": "Best burger and pizza in town"
                           }
                     ]
                 },
                 {
                     "subcatId":4.3,
                     "subcatName":"Beef",
                     "restaurants":[
                         {
                             "id": 1,
                             "name": "Royal Sushi House",
                             "stars": 4,
                             "rank": 1,
                             "openingHours": "11am-22am",
                             "description": "Best Sushi House in Ub"
                           },
                           {
                             "id": 2,
                             "name": "Burgers & Pizza",
                             "stars": 3,
                             "rank": 5,
                             "openingHours": "12pm-23pm",
                             "description": "Best burger and pizza in town"
                           }
                     ]
                 },
                 {
                     "subcatId":4.4,
                     "subcatName":"Lamb",
                     "restaurants":[
                         {
                             "id": 1,
                             "name": "Royal Sushi House",
                             "stars": 4,
                             "rank": 1,
                             "openingHours": "11am-22am",
                             "description": "Best Sushi House in Ub"
                           },
                           {
                             "id": 2,
                             "name": "Burgers & Pizza",
                             "stars": 3,
                             "rank": 5,
                             "openingHours": "12pm-23pm",
                             "description": "Best burger and pizza in town"
                           }
                     ]
                 }
             ]
            }
         ]
    }
    //appiin targetid-d insert hiih
    init(){
        let myhtml = "";
        for (const catagory of this.restaurantData) {
            for(const subcat of category.subcat)
            {
                for (const restaurant of subcat.restaurants) {
                    const restaurant = new Restaurant(restaurant);
                    myhtml += "<li>";
                    myhtml += restaurant.render();
                    myhtml+="</li>";
                }
            }
        }
        //app idtai elemented insertleh html
        //elementee oloh
        //myhtml ee insertleh function duudah
        const myapp = document.getElementById(this.targetid);
        myapp.insertAdjacentHTML("afterbegin",myhtml);
    }
}
// export default class Restaurants{
//     constructor(RestaurantUrl){
//         this._restaurantList = [];
//         this._RestaurantUrl = RestaurantUrl;
//         this._lastUpdated = Date.now();
//         this._hasChanged = false;
//     }
//     //upload searchpage ruuu hiih?

//     upload() {
//         if(this._hasChanged){
//             fetch(this._RestaurantUrl,
//                 {
//                     method: 'PUT',
//                     headers: {
//                         'Content-Type': 'application/json;charset=utf-8',
//                         'versioning' : false
//                 },
//                 body: JSON.stringify(this._restaurantList)
//             })
//                 .then(response => { console.log(response.status); })
//                 .catch(err => { console.log(err) });

//             this._hasChanged = false;
//         }
//     }

//     //filter tataj avaad maplaad reduce hiih
//      //download then filter() then map() then reduce() 
//     Download(targetElement) {   
//         fetch(`${this._recentNewsUrl}/latest`)
//         .then(result => {
//             result.json().then(jsob => {

//                     //filter only new NewsItem     
//                     const filteredArray = jsob.record.filter( newsItem =>Date.parse(newsItem.publishedDate) > this.dateFilter)
        
//                     //updating own javascript
//                     if (filteredArray.length > 0) { 
//                         // filteredArray.forEach(newNewsItem => { this._recentNewsList.push((new RecentNewsItem(newNewsItem))) });
                    
//                         gebi(targetElement).insertAdjacentHTML("afterbegin",
                            
//                             filteredArray
//                                 .map(newNews => {
//                                     const _newNews = new RecentNewsItem(newNews);
//                                     this._recentNewsList.push(_newNews);
//                                     return _newNews.Render();
//                                 })
//                                 .reduce((prevVal, curVal) => prevVal + curVal, "")
//                         );
                        
//                         this._recentNewsList.forEach(newsItem => newsItem.Bind("input", "recentnews_title", "title"));
//                     }
                    
//                     // const mappedArray=filteredArray.map(newNews => (new RecentNewsItem(newNews)).Render());
//                     // gebi("main").insertAdjacentHTML("afterbegin", mappedArray.reduce((prevVal, curVal) => prevVal + curVal, ""));
            
                        
//                 })    
//             })
//         .catch(err => { console.log(err) }); 
//     }
// }

// const params = new URLSearchParams(document.location.search);
// const dateFilter = params.get("date");

// //shortcut to getElementById
// const gebi = id => document.getElementById(id);
// //Create RecentNews object, with url
// const recentNews = new RecentNews("https://api.jsonbin.io/v3/b/5faab1a348818715939ecd04");

// //Load content from RecentNewsURL
// recentNews.Download("main");

// // const recentNewsItem = new RecentNewsItem(
// //     {
// //       "title": "Мэдээ1",
// //       "thumb": "https://abc.com/images/1.png",
// //       "alt":"zurag 1",
// //       "publishedDate": "2020.10.01 07:00:01",
// //       "shareCount": 999
// //     });

// // document.getElementsByTagName("main")[0].innerHTML = recentNewsItem.Render();

// class SearchPage {
//     constructor(jsonUrl = 'searchpage.json') {
//         this.restaurants = [];
//         this.restaurantList = document.querySelector('.restaurant_list');
//         this.filterButton = document.querySelector('.filter_button');
//         this.filterButton.addEventListener('click', this.sortByName.bind(this));
//         this.fetchRestaurants(jsonUrl);
//     }

//     fetchRestaurants(jsonUrl) {
//         fetch(jsonUrl)
//             .then(response => response.json())
//             .then(data => {
//                 this.restaurants = data.map(restaurantData => new Restaurant(
//                     restaurantData.name,
//                     restaurantData.stars,
//                     restaurantData.rank,
//                     restaurantData.openingHours,
//                     restaurantData.description
//                 ));
//                 this.displayRestaurants();
//             })
//             .catch(error => {
//                 console.error('Error fetching restaurants:', error);
//             });
//     }
// //comment sain bicheerei
    
//     sortByName() {
//         this.restaurants.sort((a, b) => a.name.localeCompare(b.name));
//         this.displayRestaurants();
//     }
// }

// const searchPage = new SearchPage();
