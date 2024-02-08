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

