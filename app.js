
// Teil 1

const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const app = express();
const adapter = new FileSync ('db.json');
const db = low(adapter);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


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

// Teil 2 Middleware  

const {meineMiddleware} = require('./src/middleware/meineMiddelware');

app.use(meineMiddleware)

app.get("/middleware", (req, res) => {
    console.log("Hallo!")
    res.status(201).send("Hello Middleware");
});

app.post("/middleware", (req,res) =>{
    console.log('ich bin post middleware');
    res.status(201).send('Ich bin post middleware');
})

// Teil 3 Routes 

const productsRouter = require('./src/routes/productsRouter');
const usersRouter = require('./src/routes/usersRouter');
const ordersRouter = require('./src/routes/ordersRouter');

app.use('/records', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

app.use((req, res, next) => {
    const error = new Error('Seite nicht gefunden');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})