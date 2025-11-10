
import express from 'express';

// create new app server
const app = express();

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

app.post('/tweets', middleware , (req, res) => {
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

// create a port and connect it to express app
app.listen(3000, () => {
    console.log('server is running on port 3000');
})