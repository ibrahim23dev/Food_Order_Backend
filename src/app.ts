import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import routes from "./api/routes";

const app = express();

dotenv.config();
app.use(helmet());
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

// Load Swagger

export default app;
