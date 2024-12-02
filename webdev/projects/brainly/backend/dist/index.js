"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use("/api/v1", route_1.default);
mongoose_1.default.connect("mongodb+srv://piyushsubrat8:tS3JGr5R50OYSLh0@cluster0.talyj.mongodb.net/project-brainly");
app.listen(PORT, () => {
    console.log(`App is running at port number ${PORT}`);
});
