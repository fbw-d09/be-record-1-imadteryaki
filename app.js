const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const app = express();
const adapter = new FileSync ('db.json');
const db = low(adapter);

app.use(express.json());
/* db.defaults({records: []}).write(); */

app.get('/api/records',(req,res) => {
    const records = db.get('records').value();
    res.status(200).json(records);
});

app.post('/api/records',(req,res) => {
    const newRecord = req.body;
    db.get('records').push(newRecord).write();
    res.status(201).json({
        message: 'Record added successfully',
        record: newRecord, 
    });
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `)
})