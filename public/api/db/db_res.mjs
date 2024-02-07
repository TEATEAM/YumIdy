import sql from './db.mjs'

class DbRes{
    constructor(){

    }
    async selectRes(){
        const restaurant = await sql`
        SELECT * FROM public.restaurant
        `
        return restaurant;
    }
 
}

const dbRes = new DbRes();

export default dbRes;