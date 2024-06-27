import express, { request, response } from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from 'mongoose';
import usersRoute from './routes/usersRoute.js';
import cosmeticsRoute from './routes/cosmeticsRoute.js';
import cors from 'cors';

const app = express();

//Middleware for pasing request body
app.use(express.json());

//Middleware for handling CORS POLICY
app.use(cors());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to Backend of Online Herblin Cosmetics Store');
});

app.use('/cosmetics', cosmeticsRoute);
app.use('/users', usersRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });



// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import { UserRouter } from './routes/authRoute.js';
// import cosmeticsRoute from './routes/cosmeticsRoute.js';
// import cookieParser from 'cookie-parser'
// import { mongoDBURL, PORT } from './config.js';

// dotenv.config();


// const app = express();
// //const PORT = process.config.PORT;

// app.use(express.json())

// app.use(cors({
//     origin: ["http://localhost:5173"],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//     credentials: true
// }))
// app.use(cookieParser())

// mongoose
//     .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('App connected to database');
//         app.listen(PORT, () => {
//             console.log(`App is listening to port: ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// app.use('/auth', UserRouter)
// app.use('/cosmetics', cosmeticsRoute);

//app.options('*', cors());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*'); // or 'http://localhost:5173' to be more specific
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     next();
//   });

//app.listen(5555, () => console.log('Server listening on port 5555'));

// mongoose.connect('mongodb+srv://root:ImaUde*.7849@onlineherblincosmeticss.k59x0lm.mongodb.net/cosmetics-collection?retryWrites=true&w=majority')

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });
