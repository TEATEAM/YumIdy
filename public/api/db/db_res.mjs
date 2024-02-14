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
        const res = await sql`
            SELECT * FROM public.restaurant
            WHERE "id" = ${resId}
        `;
        return res;
    }
}

const dbRes = new DbRes();

export default dbRes;