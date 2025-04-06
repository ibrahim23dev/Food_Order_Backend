import express = require("express");
import bodyParser from "body-parser";
import dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
];

const port = process.env.PORT;
app.get(
  "/",
  (
    req: any,
    res: { json: (arg0: { id: number; name: string; email: string }[]) => void }
  ) => {
    res.json(users);
  }
);

app.listen(port, () => {
  console.log(`Food Order Backend started on port: ${port}`);
});
