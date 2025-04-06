"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = require("../config/knexfile");
dotenv_1.default.config();
const environment = process.env.NODE_ENV || "development";
const dbConfig = knexfile_1.knexConfig[environment];
// Initialize Knex with the appropriate configuration
const db = (0, knex_1.default)(dbConfig);
// Test the database connection
db.raw("SELECT 1")
    .then(() => {
    console.log(`${process.env.DB_HOST} Database Connect successfully!!!`);
})
    .catch((err) => {
    console.error("Failed to connect to the database:", err);
});
// Export the database connection
exports.default = db;
