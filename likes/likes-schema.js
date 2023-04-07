import mongoose from "mongoose";
const likesSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    albumMongooseKey: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AlbumModel",
    },
    albumId: String,
  },
  { collection: "likes" }
);

export default likesSchema;
