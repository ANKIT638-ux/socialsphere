import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {type: String, min: 2, max: 50, required: true},
    lastName: {type: String, min: 2, max: 50, required: true},
    email: {type: String, max: 50, unique: true, required: true},
    password: {type: String, min: 8, required: true},
    picturePath: {type: String, default: ""},
    friends: {type: [String], default: []},
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
}, {timestamps: true}
);

const User = mongoose.model("User", UserSchema);
export default User;