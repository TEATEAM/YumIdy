import dbComment from "../db/db_comment.mjs";

class Comment{
    constructor(){}

    async writeComment(req, res){
        try{
            const {star1, star2, star3, setgegdel, resId} = req.body;
            //huselt ni neg body-toi ter ni json aguulj baidag.
            await dbComment.addCom(star1, star2, star3, setgegdel, resId);

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
        const resId = req.params.id;//url -s n res-nhaa id g avna

        try{
            const comment = await dbComment.selectCommentByResId(resId);//db-s resid r commentuudig haij olood avna
            //
            if(comment){//comment-g res ruu sendleh
                res.status(200).send(comment);
            }
            else{
                res.status(404).send("Not Found");//commentgui bol 404 not found page uguh
            }
        }
        //ymr neg error garval ter erroriin msg-g ugnu
        catch(error){
            console.error("Error fetching comment by resId:", error);
            res.status(500).send("Internal Server Error");
        }
    }
    async getComments(req,res){
        try{
            const result  = await dbComment.selectAllCom();
            this.restaurants = result;
            res.status(200).send(result);
        } catch(error){
            res.status(400).send("error occured");
        }
    }
}

const comment = new Comment();
export default comment;