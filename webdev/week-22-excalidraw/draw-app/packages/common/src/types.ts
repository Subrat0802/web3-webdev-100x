import {z} from "zod";

export const CreateUserSchema = z.object({
    username:z.string().min(3),
    password:z.string(),
    name:z.string()
})

export const signinSchema = z.object({
    username:z.string().min(3),
    password:z.string(),
})

export const CreateroomSchema = z.object({
    roomName: z.string().min(3).max(20)
})