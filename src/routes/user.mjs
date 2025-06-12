import { Router } from "express";
import User from "../model/user.mjs";


const userRouter = Router();

userRouter.get('/', async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).send(users);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
})

userRouter.get('/:id', async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
        return res.status(200).send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
})

userRouter.post('/', async (req, res) => {
    const data = req.body;
    try {
        const newUser = await User.create(data);
        return res.status(201).send(newUser);

    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");

    }
})


export default userRouter;