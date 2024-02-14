import sql from "./db.mjs";

class DbResComment{
    constructor(){}
    async addCom(star1, star2, star3, setgegdel, resId){
        try{
            const result = await sql`
            INSERT INTO public.comment
            (star1, star2, star3, setgegdel, "resId")
            VALUES (${star1}, ${star2}, ${star3}, ${setgegdel},${resId})
            RETURNING "commentId";
            `;

            const commentId = result[0].commentId;
            return commentId;
        }
        catch(error){
            console.error("Error adding comment: ", error);
            throw error;
        }
    }
// get hiij baina.
    async selectCommentByResId(resId){
        const comment = await sql`
        SELECT *FROM public.comment
        WHERE "resId" = ${resId}
        `;
        return comment;
    }
    async selectAllCom(){
        const comments = await sql`
        SELECT * FROM public.comment
        `
        return comments;
    }
}

const dbComment = new DbResComment();

export default dbComment;