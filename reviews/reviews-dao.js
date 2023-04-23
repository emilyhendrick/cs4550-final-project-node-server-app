import reviewModel from "./reviews-model.js";

export const findReviewByReviewId = async (reviewId) =>
  await reviewModel.findOne({ reviewId });

export const createReview = async (review) => {
  const newReview = await reviewModel.create(review);
  return newReview;
};
export const updateReview = async (id, review) => {
  const status = await reviewModel.updateOne({ _id: id }, review);
  return status;
};

export const deleteReview = async (id) => {
  const status = await reviewModel.deleteOne({ _id: id });
  return status;
};

export const findAllReviews = async () => {
  const reviews = await reviewModel.find();
  return reviews;
};

export const findReviewByUsername = async (username) => {
  const review = await reviewModel.find({ reviewer: username });
  return review;
};

export const findReviewByRestaurant = async (username) => {
  const review = await reviewModel.find({ restaurantName: username });
  return review;
};