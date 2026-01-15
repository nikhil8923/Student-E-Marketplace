import express from 'express';
import db from '../config/db.js';

const router = express.Router();

// GET /api/products?minPrice=100&minRating=4
router.get('/', async (req, res) => {
    try {
        const { minPrice, maxPrice, minRating } = req.query;
        let sql = "SELECT * FROM products WHERE 1=1";
        let params = [];

        if (minPrice) {
            sql += " AND price >= ?";
            params.push(minPrice);
        }
        if (maxPrice) {
            sql += " AND price <= ?";
            params.push(maxPrice);
        }
        if (minRating) {
            sql += " AND rating >= ?";
            params.push(minRating);
        }

        const [rows] = await db.execute(sql, params);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
});

export default router;