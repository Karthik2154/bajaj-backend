const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const userId = 'karthik_v_21052004'; 
const email = 'karthik.v2021@vitstudent.ac.in';
const rollNumber = '21BCE2013';

// POST /bfhl route
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            user_id: userId,
            email: email,
            roll_number: rollNumber,
            numbers: [],
            alphabets: [],
            highest_lowercase_alphabet: []
        });
    }
    
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase() && isNaN(char));
    
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0
        ? [lowercaseAlphabets.sort().pop()]
        : [];
    
    res.json({
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

// GET /bfhl route
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

module.exports = app;

