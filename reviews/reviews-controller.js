import * as dao from "../reviews/reviews-dao.js";

const ReviewsController = (app) => {

  const findAllReviews = async (req, res) => {
    const reviews = await dao.findAllReviews();
    res.json(reviews);
  };

  const findReviewByUsername = async (req, res) => {
    const review = await dao.findReviewByUsername(req.params.username);
    res.json(review);
  };

  const findReviewByRestaurant = async (req, res) => {
    const review = await dao.findReviewByRestaurant(req.params.username);
    res.json(review);
  };

  const findReviewById = async (req, res) => {
    const user = await dao.findReviewByReviewId(req.params.id);
    res.json(user);
  };

  const createReview = async (req, res) => {
    const review = req.body;
    const newReview = await dao.createReview(review);
    res.json(newReview);
  };

  const updateReview = async (req, res) => {
    const review = req.body;
    const status = await dao.updateReview(req.params.id, review);
    res.send(status);
  };
  const deleteReview = async (req, res) => {
    const status = await dao.deleteReview(req.params.id);
    res.send(status);
  };

  app.get("/api/reviews", findAllReviews);
  app.get("/api/reviews/username/:username", findReviewByUsername);
  app.get("/api/reviews/restaurant/:username", findReviewByRestaurant);
  app.post("/api/reviews", createReview);
  app.put("/api/reviews/:id", updateReview);
  app.delete("/api/reviews/:id", deleteReview);
};

export default ReviewsController;
