import express from "express";
import UsersController from "./controllers/users/users-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";
mongoose.connect("mongodb+srv://finalproject4550:hYLL09EUEFoyvDaY@cluster0.6fwkg2y.mongodb.net/?retryWrites=true&w=majority");
import AuthController from "./users/auth-controller.js";

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

const welcome = (req, res) => {
  res.send("Final project server");
};

app.get("/", welcome);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

