import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js'; 
import cors from 'cors';


dotenv.config();
const app = express();
app.use(cors()); // Ye backend ko permission deta hai React se baat karne ki
app.use(express.json());

// The route you are trying to visit in the browser
app.get('/api/products', async (req, res) => {
    try {
        const [rows] = await db.execute("SELECT * FROM products");
        res.json(rows); // This sends your MySQL data to the browser
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database Connection Failed. Check .env and MySQL service." });
    }
});

app.get('/', (req, res) => {
    res.send("<h1>Backend is Live! Now try /api/products</h1>");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});