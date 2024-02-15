import path from 'path';
import express from 'express';
import cors from 'cors';

import restaurants from './routes/restaurants.mjs';
import comment from './routes/comment.mjs';


import swaggerUi from 'swagger-ui-express';
import swaggerJsondoc from 'swagger-jsdoc';

// express js-n jishee bogood routes-s tohiruulj, todorhoildog
const app = express();
// Serverees irj bui huseltiig sonsoh portin dugaar.
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const __dirname = path.resolve(path.dirname(''));
const options = {
  swaggerDefinition: {
      openapi: "3.0.0",
      info: {
          title: "YUMIDY API",
          version: "1.0.0",
          description:
              "YUMIDY web development", 
          contact: {
              name: "Admin",
              url: "yumidy.mn",
              email: "yumidy@gmail.com"
          }
      },
      servers: [
          {
              url: "http://localhost:3000/"
          }
      ]
  },
  apis: ["./app.mjs"],
  root: path.join(__dirname)
};
const specs = swaggerJsondoc(options);
app.use("/docs", swaggerUi.serve);
app.get("/docs", swaggerUi.setup(specs, {
  explorer: true
}));
// Routes

/**
 * @swagger
 * tags:
 *  -
 *   name: "Restaurant"
 *   description: Restaurant related operations
 *   
 *  - 
 *   name: "Comment"
 *   description: Comment related operations 

 */

/**
 * @swagger
 *  paths:
 *      /restaurants:
 *          get:
 *              tags:
 *                  - Restaurant
 *              summary: Get restaurants info from database
 *              parameters:
 *              responses:
 *                  "200":
 *                      description: Success. restaurants info
 *                      content:
 *         application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id: 
 *                     type: integer
 *                   name: 
 *                     type: string
 *                   img: 
 *                     type: string
 *                   stars: 
 *                     type: integer
 *                   rank: 
 *                     type: string
 *                   openingHours: 
 *                     type: string
 *                   tag: 
 *                     type: integer
 *                   meals: 
 *                     type: array
 *                     items:
 *                       type:string
 *                   prices: 
 *                     type: array
 *                     items:
 *                       type:string
 *                   cuisines: 
 *                     type: array
 *                     items:
 *                       type:string
 *                   dishes: 
 *                     type: array
 *                     items:
 *                       type:string
 * 
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Server error
 *  
 */
app.get('/restaurants', async (req, res) => {
  await restaurants.getRestaurants(req,res);
});

/**
 * @swagger
 *  paths:
 *      /restaurants/:id:
 *          get:
 *              tags:
 *                  - Restaurant
 *              summary: Get restaurant info from database
 *              parameters:
*                -
*                   in: path
*                   name: id
*                   schema:
*                   type: integer
*                   required: true
*                   description: Numeric ID of the restaurant
 *              responses:
 *                  "200":
 *                      description: Success. restaurant info
 *                      content:
 *         application/json:
 *             schema:
 *                 type: object
 *                 properties:
 *                   id: 
 *                     type: integer
 *                   name: 
 *                     type: string
 *                   img: 
 *                     type: string
 *                   stars: 
 *                     type: integer
 *                   rank: 
 *                     type: string
 *                   openingHours: 
 *                     type: string
 *                   tag: 
 *                     type: integer
 *                   meals: 
 *                     type: array
 *                     items:
 *                       type:string
 *                   prices: 
 *                     type: array
 *                     items:
 *                       type:string
 *                   cuisines: 
 *                     type: array
 *                     items:
 *                       type:string
 *                   dishes: 
 *                     type: array
 *                     items:
 *                       type:string
 * 
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Server error
 *  
 */
app.get('/restaurants/:id', async(req, res) => {
    await restaurants.getResById(req, res);
});


/**
 * @swagger
 * /writecomment:
 *   post:
 *     tags:
 *       - Comment
 *     summary: Restaurant-d comment nemej uguh
 *     description: Restaurant-d id-r n damjuulj comment nemej
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *                 type: object
 *                 properties:
 *                   commentId: 
 *                     type: integer
 *                   star1: 
 *                     type: integer
 *                   star2: 
 *                     type: integer
 *                   star3: 
 *                     type: integer
 *                   setgegdel: 
 *                     type: string
 *                   resId: 
 *                     type: integer
 *     responses:
 *       200:
 *         description: Comment succesfully added.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Comment succesfully added.

 *       400:
 *         description: Not Found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Not Found.
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Server error
 */
//Comment Bichih
app.post('/writecomment', async(req, res) => {
  await comment.writeComment(req, res);
});

/**
 * @swagger
 *  paths:
 *      /comments:
 *          get:
 *              tags:
 *                  - Comment
 *              summary: Get all comments info from database
 *              parameters:
 *              responses:
 *                  "200":
 *                      description: Success. all comments info
 *                      content:
 *         application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   commentId: 
 *                     type: integer
 *                   star1: 
 *                     type: integer
 *                   star2: 
 *                     type: integer
 *                   star3: 
 *                     type: integer
 *                   setgegdel: 
 *                     type: string
 *                   resId: 
 *                     type: integer
 * 
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Server error
 *  
 */
//Buh com-n medeelliig avah
app.get('/comments', async (req, res) => {
  await comment.getComments(req,res);
});
/**
 * @swagger
 *  paths:
 *      /comments/:id:
 *          get:
 *              tags:
 *                  - Restaurant
 *              summary: Get restaurant's comment info from database
 *              parameters:
*                -
*                   in: path
*                   name: id
*                   schema:
*                   type: integer
*                   required: true
*                   description: Numeric ID of the restaurant
 *              responses:
 *                  "200":
 *                      description: Success. restaurant info
 *                      content:
 *         application/json:
 *             schema:
 *                 type: object
 *                 properties:
 *                   commentId: 
 *                     type: integer
 *                   star1: 
 *                     type: integer
 *                   star2: 
 *                     type: integer
 *                   star3: 
 *                     type: integer
 *                   setgegdel: 
 *                     type: string
 *                   resId: 
 *                     type: integer
 * 
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Server error
 *  
 */
//Resiin id-aar commentuudiin jagsaaltiig avah
app.get('/comments/:id', async(req, res) =>{
  await comment.getCommentByResId(req, res);
})
// 3000 zam deer ajillaluuhaar tohiruulsan
app.listen(port, () => console.log(`App listening on port http://localhost:${port}`));
