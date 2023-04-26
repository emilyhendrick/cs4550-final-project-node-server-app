import express from "express";
import axios from "axios";
import UsersController from "./controllers/users/users-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import session from "express-session";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import YelpController from "./yelp/yelp-controller.js";
import AuthController from "./users/auth-controller.js";

dotenv.config();


const app = express();
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
);

app.use(express.json());
const port = 4000;
TuitsController(app);
UsersController(app);
ReviewsController(app);
YelpController(app)

const welcome = (req, res) => {
    res.send("Final project server");
};

app.get("/", welcome);

mongoose.connect("mongodb+srv://finalproject4550:hYLL09EUEFoyvDaY@cluster0.6fwkg2y.mongodb.net/?retryWrites=true&w=majority");

const apiKey = process.env.REACT_APP_YELP_KEY;

app.get('/api/search', async (req, res) => {
    try {

        const term = req.query.term;
        const response = await axios.get(`https://api.yelp.com/v3/businesses/search?term=${term}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-type': 'application/json'
            }
        });

        const businesses = response.data.businesses.map(business => ({
            id: business.id,
            name: business.name,
            image: business.image_url,
            location: business.location.address1,
            rating: business.rating
        }));
        res.json(businesses);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server started on port ${process.env.PORT || 4000}`);
});
