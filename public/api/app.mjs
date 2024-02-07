import path from 'path';
import express from 'express';
// import cookieParser from 'cookie-parser';
import cors from 'cors';

import restaurants from './routes/restaurants.mjs';
// import user from './routes/users.mjs';
// import comment from './routes/comments.mjs';


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


// app.get('/', (req, res) => {
//     res.sendFile('./index.html', options);
// });

//Buh res-n medeelliig avah
app.get('/restaurants', async (req, res) => {
  await restaurants.getRestaurants(req,res);
});
// app.get('/searchrestaurants', async(req, res) => {
//   res.sendFile('./searchpage.html', options);
// })

//res-g id-aar ni avah
app.get('/restaurants/:id', async(req, res) => {
    await restaurants.getResById(req, res);
});

// app.get('/aboutrestaurant', async(req, res) => {
//   res.sendFile('./restaurantpage.html', options);
// })

// app.get('/likedrestaruants', async(req, res) => {
//   res.sendFile('./liked.html', options);
// })


// //Burtguuleh
// app.post('/signup', async (req, res) => {
//   await user.signup(req, res);
// })

// app.get('/signuppage', async(req, res) => {
//   res.sendFile('./sign-up.html', options);
// })

// //Newtreh
// app.post('/login', cors(), async (req, res) => {
//   try {
//       await user.verifyLogin(req, res);
//   } catch (error) {
//       console.error('Login Error:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// //Garah
// app.get('/logout', (req, res) => { 
//   user.sessions.delete(Number(req.cookies.session_id));
//   res.status(200).send();
// });

// //Comment Bichih
// app.post('/writecomment', async(req, res) => {
//   await comment.writeComment(req, res);
// });


// //Clubiin id-aar commentuudiin jagsaaltiig avah
// app.get('/comments/:id', async(req, res) =>{
//   await comment.getCommentsByClubId(req, res);
// })

app.listen(port, () => console.log(`App listening on port http://localhost:${port}`));
