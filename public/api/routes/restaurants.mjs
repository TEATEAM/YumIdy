import dbRes from "../db/db_res.mjs";

class Restaurants{
    constructor() {
        this.restaurants = new Map();
    }
    async getRestaurants(req, res){
        try{
            const result  = await dbRes.selectAllRes();
            this.restaurants = result;
            res.status(200).send(result);
        } catch(error){
            res.status(400).send("error occured");
        }
    }
    async getResById(req, res){
        const resId = req.params.id;

        try{
            const restaurant  = await dbRes.selectResById(resId);
            
            if(!restaurant){
                res.status(404).send("Not Found");
            }
            else{
                res.status(200).send(restaurant);
            }
        } catch(error){
            console.log("Error fetching restaurant by id", error);
            res.status(500).send("Internal Server Error");
        }
    }
}

const restaurants = new Restaurants();

export default restaurants;