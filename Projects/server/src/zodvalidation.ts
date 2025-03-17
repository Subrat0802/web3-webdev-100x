import {z} from "zod";

export const UserValidation = z.object({
    email:z.string().email(),
    username:z.string().min(3),
    password:z.string().min(6).max(25),
    confirmPassword:z.string().min(6).max(25)
})

export const userSigninValidation = z.object({
    email:z.string().email(),
    password:z.string().min(6).max(25),
})