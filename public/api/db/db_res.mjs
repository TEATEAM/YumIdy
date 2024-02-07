import sql from './db.mjs'

class DbRes{
    constructor(){

    }
    async selectAllRes(){
        const restaurant = await sql`
        SELECT * FROM public.restaurant
        `
        return restaurant;
    }
    async selectResById(resId) {
        const club = await sql`
            SELECT * FROM public.restaurant
            WHERE "id" = ${resId}
        `;
        return club;
    }
}

const dbRes = new DbRes();

export default dbRes;