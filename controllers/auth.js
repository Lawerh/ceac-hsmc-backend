import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

//User Registration
export const register = async(req, res) => { //request from frontend, response to frontend: express default.
    try {
        const {
            first_name,
            last_name,
            email,
            password,
            picturePath,
            friends,
            church,
            impressions
        }= req.body;

        //encrypting the password with salt generated from bcrypt
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = {
            first_name,
            first_name,
            last_name,
            email,
            password,
            picturePath,
            friends,
            church,
            impressions
        }
        //taking the request from frontend and sending response to frontend
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}