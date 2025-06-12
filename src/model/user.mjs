import { model, Schema } from "mongoose";

const userSchema = Schema({
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
    email: String
},{
    timestamps:true
})

const User = model("User", userSchema);

export default User;