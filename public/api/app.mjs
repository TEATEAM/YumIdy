import path from 'path';
import express from 'express';
import cors from 'cors';

import restaurants from './routes/restaurants.mjs';
import comment from './routes/comment.mjs';


const app = express();
const port = 3000;
const __dirname = path.resolve(path.dirname(''));
const options = {
    root: path.join(__dirname)
};

// app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use(express.static('public'));

//Buh res-n medeelliig avah
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


//Resiin id-aar commentuudiin jagsaaltiig avah
app.get('/comments/:id', async(req, res) =>{
  await comment.getCommentByResId(req, res);
})

app.listen(port, () => console.log(`App listening on port http://localhost:${port}`));
