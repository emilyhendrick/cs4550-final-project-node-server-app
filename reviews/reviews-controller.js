import * as reviewsDao from "./reviews-dao.js";
import * as likesDao from "../likes/likes-dao.js";

const ReviewsController = (app) => {
  const likeReview = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }

    let review = await reviewsDao.findReviewByReviewId(req.params.albumId);
    if (!review) {
      review = await reviewsDao.createReview(req.body);
    }
    const like = await likesDao.createLike({
      // fill in
    });
    res.json(like);
  };

  // need address
  app.post("#", likeReview);
};

export default ReviewsController;
