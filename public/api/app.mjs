import path from 'path';
import express from 'express';
import cors from 'cors';

import restaurants from './routes/restaurants.mjs';
import comment from './routes/comment.mjs';

// express js-n jishee bogood routes-s tohiruulj, todorhoildog
const app = express();
// Serverees irj bui huseltiig sonsoh portin dugaar.
const port = 3000;
const __dirname = path.resolve(path.dirname(''));
const options = {
    root: path.join(__dirname)
};

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use(express.static('public'));

// Res-n bvh medeelliig avdag get function 
app.get('/restaurants', async (req, res) => {
  await restaurants.getRestaurants(req,res);
});
//res-g id-aar ni avah
app.get('/restaurants/:id', async(req, res) => {
    await restaurants.getResById(req, res);
});


//Comment Bichih
app.post('/writecomment', async(req, res) => {
  await comment.writeComment(req, res);
});

//Buh com-n medeelliig avah
app.get('/comments', async (req, res) => {
  await comment.getComments(req,res);
});
//Resiin id-aar commentuudiin jagsaaltiig avah
app.get('/comments/:id', async(req, res) =>{
  await comment.getCommentByResId(req, res);
})
// 3000 zam deer ajillaluuhaar tohiruulsan
app.listen(port, () => console.log(`App listening on port http://localhost:${port}`));
