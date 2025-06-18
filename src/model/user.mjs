import { model, Schema, Types } from "mongoose";
import { type } from "os";

const userSchema = new Schema({


    name: {
        type: String,
        required: true,

    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    email: String,

    profile: {
        type: Types.ObjectId,
        ref: "Profile",
        unique: true
    }
}, {
    timestamps: true
})




const User = model("User", userSchema);

export default User;