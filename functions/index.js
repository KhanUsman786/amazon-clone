const functions = require('firebase-functions');
const express = require('express');
const cors =require('cors');

const stripe = require('stripe')('sk_test_51Hx9YPD0MR4M1e19X44oJb4Zi8Aog2YucOhkpzexZLrcF4KV5NgPabu8iRiALExkxwZAVtQy7Btp1ZXScx5YJrxy00vvDBidR1')
// API

// app config
const app = express();

// Midllewares

app.use(cors({origin: true}));
app.use(express.json());//it allow us to send data and get data in json
//Api routes
app.get('/',(request,response)=>{
    response.status(200).send('hello world')
})


app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

        console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd",
        });
        // OK - Created
        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        });
    });



// -listen command
exports.api= functions.https.onRequest(app);


// example endpont
// http://localhost:5001/clone-9cc96/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
