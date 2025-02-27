import express from "express";
import { Client } from "pg";

const app = express();
app.use(express.json());

const pgClient = new Client({
    connectionString: "postgresql://start-using-postgress_owner:ljYLi6aFVrd0@ep-icy-mud-a1gtssi3.ap-southeast-1.aws.neon.tech/start-using-postgress?sslmode=require",
    ssl: { rejectUnauthorized: false },
});
pgClient.connect();

app.post("/signup", async (req, res) => {
    const { username, password, email, city, country, street, pincode } = req.body;

    try {
        const insertUserQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
        const insertAddressQuery = `INSERT INTO addresses (city, country, street, pincode, user_Id) VALUES ($1, $2, $3, $4, $5);`;

        await pgClient.query("BEGIN;")
        const response = await pgClient.query(insertUserQuery, [username, email, password]);
        const userId = response.rows[0].id;
        await pgClient.query(insertAddressQuery, [city, country, street, pincode, userId]);
        await pgClient.query("COMMIT;")
         
        res.json({
            message: "You have successfully signed up!",
        });
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({
            message: "Error while signing up"
        });
    }
});


app.get("/metadata", async (req, res) => {
    const id = req.query.id;

    const query1 = `SELECT username, email,id FROM users WHERE id=$1`;
    const response1 = await pgClient.query(query1, [id]);

    
    const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
    const response2 = await pgClient.query(query2, [id]);

    res.json({
        user: response1.rows[0],
        address: response2.rows[0]
    })
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
