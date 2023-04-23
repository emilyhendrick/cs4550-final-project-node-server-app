import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
      reviewer: {type: String, required: true},
      reviewId: {type: String, required: true, unique: true},
      review: {type: String, required: true},
      Rating: {type: Number},
      createdOn: {type: Date, default: Date.now},
      profilePic: {type: String},
      restaurantName: {type: String, required: true}
    },
    {collection: "reviews"}
);

export default reviewSchema;
