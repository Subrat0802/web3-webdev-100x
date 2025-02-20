"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client({
    connectionString: "postgresql://start-using-postgress_owner:ljYLi6aFVrd0@ep-icy-mud-a1gtssi3.ap-southeast-1.aws.neon.tech/start-using-postgress?sslmode=require",
    ssl: { rejectUnauthorized: false },
});
pgClient.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email, city, country, street, pincode } = req.body;
    try {
        const insertUserQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
        const insertAddressQuery = `INSERT INTO addresses (city, country, street, pincode, user_Id) VALUES ($1, $2, $3, $4, $5);`;
        yield pgClient.query("BEGIN;");
        const response = yield pgClient.query(insertUserQuery, [username, email, password]);
        const userId = response.rows[0].id;
        yield pgClient.query(insertAddressQuery, [city, country, street, pincode, userId]);
        yield pgClient.query("COMMIT;");
        res.json({
            message: "You have successfully signed up!",
        });
    }
    catch (err) {
        console.error("Error during signup:", err);
        res.status(500).json({
            message: "Error while signing up"
        });
    }
}));
app.get("/metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const query1 = `SELECT username, email,id FROM users WHERE id=$1`;
    const response1 = yield pgClient.query(query1, [id]);
    const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
    const response2 = yield pgClient.query(query2, [id]);
    res.json({
        user: response1.rows[0],
        address: response2.rows[0]
    });
}));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
