import express from "express";
import UsersController from "./controllers/users/users-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";
mongoose.connect("mongodb+srv://finalproject4550:hYLL09EUEFoyvDaY@cluster0.6fwkg2y.mongodb.net/?retryWrites=true&w=majority");

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

UsersController(app);
ReviewsController(app);

const welcome = (req, res) => {
  res.send("Final project server");
};
app.get("/", welcome);

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1><p>This is the about page</p>");
});

app.get("/api/users", (req, res) => {
  res.json({
    name: "John Doe",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
