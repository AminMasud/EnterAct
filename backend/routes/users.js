const express = require('express');
const router = express.Router();
const db = require('../db');

// CREATE a new user
router.post('/create', (req, res) => {
    const { username, email, password, role } = req.body;

    const sql = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
    db.query(sql, [username, email, password, role], (err, result) => {
        if (err) {
            res.status(500).json({ status: 'error', error: err });
        } else {
            res.json({ status: 'success', id: result.insertId });
        }
    });
});

module.exports = router;
