const express = require('express');
import bodyParser from "body-parser";
const app = express();
import { adminRoutes, vendorRoutes } from "./routes";
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mock data for storing user information

let users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
];

// GET all users

app.use('/admin', adminRoutes);

app.use('/vendor', vendorRoutes);

app.get('/', (req: any, res: { json: (arg0: { id: number; name: string; email: string; }[]) => void; }) => {
  res.json(users);
});  

// GET user by ID
app.listen(3000, () => {
  console.log('Server started on port 3000');
})