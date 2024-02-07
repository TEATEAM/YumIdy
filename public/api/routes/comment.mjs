import dbComment from "../db/db_comment.mjs";
class Comment{
    constructor(){}

    async writeComment(req, res){
        try{
            const {star1, star2, star3, text, resId} = req.body;
            //huselt ni neg body-toi ter ni json aguulj baidag.
            await dbComment.addCom(star1, star2, star3, text, resId);

            res.status(201).json({
                message: 'Comment added successfully'
            });
        }
        catch(error){
            console.error(error);
            res.status(500).json({
                message: 'Internal server error.'
            });
        }
    }
    async getCommentByResId(req, res){
        const resId = req.params.id;

        try{
            const comment = await dbComment.selectCommentByResId(resId);

            if(comment){
                res.status(200).send(comment);
            }
            else{
                res.status(404).send("Not Found");
            }
        }
        catch(error){
            console.error("Error fetching comment by resId:", error);
            res.status(500).send("Internal Server Error");
        }
    }
}

const comment = new Comment();
export default comment;