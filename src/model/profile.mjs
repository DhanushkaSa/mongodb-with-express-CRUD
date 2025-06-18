import { profile } from "console";
import { model, Schema, Types } from "mongoose"
import { type } from "os";

const profileSchema = new Schema({

    user: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
        unique:true
    },
    image: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
})

const Profile = model("Profile", profileSchema);

export default Profile;