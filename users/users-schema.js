import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
    {
      username: {type: String, required: true, unique: true},
      password: {type: String, required: true},
      firstName: {type: String, default: ""},
      lastName: {type: String, default: ""},
      email: {type: String},
      createdOn: {type: Date, default: Date.now},
      profilePic: {type: String},
      userRole: {type: String, required: true},
      businessName: {type: String},
      businessAddress: {type: String}
    },
    {collection: "users"}
);

export default usersSchema;
