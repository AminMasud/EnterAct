const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/create', (req, res) => {
    const { title, description, reward } = req.body;
    const creator = 'admin'; // ✅ Default creator for now

    const sql = 'INSERT INTO quests (creator, title, description, reward) VALUES (?, ?, ?, ?)';
    db.query(sql, [creator, title, description, reward], (err, result) => {
        if (err) {
            res.status(500).json({ status: 'error', error: err });
        } else {
            res.json({ status: 'success', id: result.insertId });
        }
    });
});

router.get('/', (req, res) => {
    db.query('SELECT * FROM quests', (err, rows) => {
        if (err) res.status(500).json({ error: err });
        else res.json(rows);
    });
});

module.exports = router;
