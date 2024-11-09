const { Router } = require("express");
const { adminModel, courseModel } = require("../db");
const adminRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const { adminMiddleware } = require("../middleware/admin");

// Zod schema for signup
const signupSchema = z.object({
  email: z.string().email(), // Validate as a valid email string
  password: z.string().min(6), // Password must be at least 6 characters
  firstName: z.string().min(1), // First name must not be empty
  lastName: z.string().min(1), // Last name must not be empty
});

// Zod schema for signin
const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Admin signup endpoint with Zod validation
adminRouter.post("/signup", async function (req, res) {
  try {
    // Validate the request body against the signup schema
    const validatedData = await signupSchema.parseAsync(req.body);

    const { email, password, firstName, lastName } = validatedData;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const response = await adminModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    res.json({
      message: "Admin signup successful",
      data: response,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle Zod validation errors
      res.status(400).json({
        message: "Validation failed",
        errors: error.errors, // Return validation error details
      });
    } else {
      console.error("Signup error:", error); // Log other errors
      res.status(500).json({
        message: "Signup failed",
      });
    }
  }
});

// Admin signin endpoint with Zod validation
adminRouter.post("/signin", async function (req, res) {
  try {
    // Validate the request body against the signin schema
    const validatedData = await signinSchema.parseAsync(req.body);

    const { email, password } = validatedData;

    // Find the admin by email
    const admin = await adminModel.findOne({ email });

    if (admin) {
      // Compare the hashed password with the one provided by the user
      const isMatch = await bcrypt.compare(password, admin.password);

      if (isMatch) {
        console.log("response", admin);

        // Generate JWT token with the admin's _id
        const token = jwt.sign({ id: admin._id }, process.env.jwtadminPassword);

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
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle Zod validation errors
      res.status(400).json({
        message: "Validation failed",
        errors: error.errors,
      });
    } else {
      console.error("Signin error:", error); // Log other errors
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
});

// Other routes
adminRouter.post("/course", adminMiddleware, async function (req, res) {
  try {
    const adminId = req.userId;
    console.log("adminId", adminId)
    const { title, description, imageUrl, price } = req.body;
    const response = await courseModel.create({
      title,
      description,
      imageUrl,
      price,
      creatorId: adminId,
    });

    res.json({
      message: "course creation endpoint",
      courseid: response._id,
    });
  } catch (error) {
    res.status(500).json({
      mssage: "server error",
    });
  }
});

adminRouter.put("/editCourse", adminMiddleware, async function (req, res) {
  try {
    const adminId = req.userId;
    const { title, description, imageUrl, price, courseId } = req.body;
    const response = await courseModel.updateOne(
      { _id: courseId, creatorId: adminId },
      {
        title,
        description,
        imageUrl,
        price,
      }
    );

    res.json({
      message: "course edit endpoint",
      courseid: response
    });
  } catch (error) {
    res.status(500).json({
      mssage: "server error",
    });
  }
});

adminRouter.get("/course/bulk",adminMiddleware, async function (req, res) {
  try {
    const adminId = req.userId;
    const response = await courseModel.find(
      { creatorId: adminId },
    );

    res.json({
      message: "course bulk endpoint",
      courseid: response
    });
  } catch (error) {
    res.status(500).json({
      mssage: "server error",
    });
  };
});

module.exports = { adminRouter };
