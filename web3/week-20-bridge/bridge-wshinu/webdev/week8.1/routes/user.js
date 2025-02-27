const { Router } = require("express");
const { userModel, purcahseModel } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const { userMiddleware } = require("../middleware/user");
const userRouter = Router();

// Zod schema for user signup
const userSignupSchema = z.object({
  email: z.string().email(), // Valid email
  password: z.string().min(6), // Minimum 6 characters
  firstName: z.string().min(1), // Not empty
  lastName: z.string().min(1),  // Not empty
});

// Zod schema for user signin
const userSigninSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// User signup endpoint with Zod validation and bcrypt password hashing
userRouter.post("/signup", async function (req, res) {
  try {
    // Validate the request body using Zod
    const validatedData = await userSignupSchema.parseAsync(req.body);
    
    const { email, password, firstName, lastName } = validatedData;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const response = await userModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    res.json({
      message: "User signup successful",
      data: response,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle Zod validation errors
      res.status(400).json({
        message: "Validation failed",
        errors: error.errors,
      });
    } else {
      console.error("Signup error:", error);
      res.status(500).json({
        message: "Signup failed",
      });
    }
  }
});

// User signin endpoint with Zod validation and bcrypt password comparison
userRouter.post("/signin", async function (req, res) {
  try {
    // Validate the request body using Zod
    const validatedData = await userSigninSchema.parseAsync(req.body);

    const { email, password } = validatedData;

    // Find the user by email
    const user = await userModel.findOne({ email });

    if (user) {
      // Compare the provided password with the hashed password
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.jwtuserPassword);

        res.json({
          token: token,
          message: "You're successfully logged in",
        });
      } else {
        res.status(403).json({
          message: "Incorrect credentials",
        });
      }
    } else {
      res.status(403).json({
        message: "Incorrect credentials",
      });
    }
  } catch (err) {
    if (err instanceof z.ZodError) {
      // Handle Zod validation errors
      res.status(400).json({
        message: "Validation failed",
        errors: err.errors,
      });
    } else {
      console.error("Signin error:", err);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
});

// Sample route
userRouter.get("/purchases",userMiddleware, async function (req, res) {
  try{
    const userId = req.userId;
    const resp = await purcahseModel.find({userId})
    console.log("resp", resp)
    res.json({
      message: "preview course purcahse",
      data:resp
    });
  }catch(err){
    res.json({
      message:"Invalid credentials"
    })
  }
});

module.exports = { userRouter };
