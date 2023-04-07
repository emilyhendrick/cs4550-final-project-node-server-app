import mongoose from "mongoose";
import reviewSchema from "./reviews-schema.js";
const reviewModel = mongoose.model("reviewModel", reviewSchema);
export default reviewModel;
