const {z} = require("zod");


exports.userSignUpSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    email: z.string().email(),
    accountType: z.string().min(5)
})

exports.userSignInSchema = z.object({    
    email: z.string().email(),
    password: z.string().min(6),
})

exports.zodCourseSchema = z.object({
    title: z.string().min(1),
    description:z.string().min(1),
    whatYouWillLearn:z.string().min(1),
    price: z.number().min(1),
    thumbnails: z.string().min(1),
    tag: z.string().min(1)
})

exports.zodProfileSchema = z.object({
    address: z.string().min(3),
    phone:z.string(),
    dateofbirth:z.string(),
    gender: z.string(),
})
