import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
    {
      username: {type: String, required: true, unique: true},
      password: {type: String, required: true},
      firstName: {type: String, default: ""},
      lastName: {type: String, default: ""},
      email: {type: String},
      createdOn: {type: Date, default: Date.now},
      profilePic: {type: String, default: "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"},
      userRole: {type: String, required: true},
      businessName: {type: String},
      businessAddress: {type: String}
    },
    {collection: "users"}
);

export default usersSchema;
