import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
    {
      username: {type: String, required: true, unique: true},
      password: {type: String, required: true},
      firstName: {type: String, default: ""},
      lastName: String,
      email: {type: String},
      createdOn: {type: Date, default: Date.now},
      profilePic: {type: Image},
    },
    {collection: "users"}
);

export default usersSchema;
