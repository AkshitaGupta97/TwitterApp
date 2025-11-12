
import express from 'express';
import morgan from 'morgan';
import { PORT } from './config/serverConfig';
import tweetRouter from './routes/tweet.js';
//import path from 'path';
//import {fileURLToPath} from 'url';

// create new app server

const app = express();
app.use(morgan('combined')); // logging middleware, combined is a predefined format string

app.use(express.json());
app.use(express.text()); // middleware to parse text request body
app.use(express.urlencoded()); // needed to parse urlencoded request body

app.set('view engine', 'ejs'); // setting ejs as the view engine

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

//app.set('views', path.join(__dirname, '/views')); // setting the views directory

app.set('views', import.meta.dirname + '/views'); // setting the views directory

// route to render ejs template

app.get('/', (req, res) => {
    res.render('home', {name: 'Twitter User'});
})

// middleware to parse json request body
function mid1(req,res,next){
    console.log("this is my first middleware", next);
    next();
}
function mid2(req,res,next){
    console.log("this is my second middleware", next);
    next();
}
function mid3(req,res,next){
    console.log("this is my third middleware");
    next();
}

// common middleware for all routes
function commonMiddleWare(req,res,next){
    console.log("this is common middleware for all routes");
    next();
}

app.use('/tweets', tweetRouter); // using tweet router for /tweets route  (localhost:3000/tweets) -> tweetRouter is used here

app.use(commonMiddleWare); // applying common middleware to all routes

const middleware = [mid1, mid2, mid3]

// mid1 is a middleware function that logs a message for every request.
// next is a function that passes control to the next middleware in the stack.
app.get('/ping', middleware,  (req, res) => {
    return res.json({
        message: "hello pong"
    })
}); 

// create a route, in postman we can test it by hitting localhost:3000/ping, and get response 'hello pong'.
// we are using json format to send the response.

app.post('/twts', middleware , (req, res) => {
    console.log("creating a tweet", req.query);  // req.query contains the query parameters sent in the request
    console.log("request body is ", req.body); // req.body contains the request body sent in the request

    return res.json({
        tweets: [
            {
                username: "user1",
                tweet: "this is my first tweet"
            },
            {
                username: "user2",
                tweet: "hello world!"
            }
        ]
    })
})

app.get('/twiter/:tweetId/comments/:commentId', (req,res) => {
    console.log("fetching a specific tweet", req.params); // req.params contains the route parameters
    console.log("tweet id is ", req.params.tweetId);
    console.log("comment id is ", req.params.commentId);
    return res.json({
        message: `fetching tweet with id ${req.params.tweetId}`
    })
})

// if any of the request are not found then
app.all('*', (req,res) => {
    return res.status(404).json({
        message: "resource not found"
    })
})
// create a port and connect it to express app
app.listen(PORT, () => {
    console.log('server is running on port 3000');
})