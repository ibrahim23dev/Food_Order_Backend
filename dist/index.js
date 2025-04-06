"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
let users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
];
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.json(users);
});
app.listen(port, () => {
    console.log(`Food Order Backend started on port: ${port}`);
});
