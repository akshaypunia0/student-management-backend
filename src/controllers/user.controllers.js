import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { secret } from '../config/env.js'


const userRegister = async (req, res) => {
    try {
        const { username, email, passwordHash, role } = req.body

        if (!username || !email || !passwordHash || !role) {
            return res.status(400).json({ message: "All fields are required" })
        }

        bcrypt.hash(passwordHash, 10, async function (err, hash) {
            const createdUser = await User.create({
                username,
                email,
                passwordHash: hash,
                role
            });

            const newCreatedUser = {
                username,
                email,
                role
            }

            return res.status(201).json(
                {
                    message: "User created successfully", newCreatedUser
                }
            );
        });


    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ message: "something went wrong while register" })

    }
}


const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({message: "Email and password both required"});
        }

        const user = await User.findOne({email : email});

        if (!user) {
            return res.status(404).json({message: "User not found"})
        }

        bcrypt.compare(password, user.passwordHash, function(err, result){
            if (result) {

                const token = jwt.sign(
                    {
                        email
                    },
                    secret
                )

                console.log(token);
                

                return res.status(200).json({message: "Login successfull"})
            }
            else return res.status(401).json({message: "Email or password is incorrrect"})
        })

    } catch (error) {
        console.log(error.message);
        return res.status(400).json({message: "Something went wrong while login"});
        
    }
}

export { userRegister, userLogin }