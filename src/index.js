
import express from 'express';

// create new app server
const app = express();

app.get('/ping', (req, res) => {
    return res.json({
        message: "hello pong"
    })
}); 
// create a route, in postman we can test it by hitting localhost:3000/ping, and get response 'hello pong'.
// we are using json format to send the response.

app.post('/tweets', (req, res) => {
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