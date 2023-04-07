import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    reviewer: String,
    reviewId: String,
  },
  { collection: "reviews" }
);

export default reviewSchema;
