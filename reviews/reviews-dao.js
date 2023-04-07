import reviewModel from "./reviews-model.js";

export const findReviewByReviewId = async (reviewId) =>
  await reviewModel.findOne({ reviewId });

export const createReview = async (review) => {
  const newReview = await reviewModel.create(review);
  return newReview;
};
