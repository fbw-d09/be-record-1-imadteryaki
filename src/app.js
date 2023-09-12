
// Teil 1

const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


const app = express();


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

/* const {meineMiddleware} = require('./middleware/meineMiddelware');

app.use(meineMiddleware)

app.get("/middleware", (req, res) => {
    console.log("Hallo!")
    res.status(201).send("Hello Middleware");
});

app.post("/middleware", (req,res) =>{
    console.log('ich bin post middleware');
    res.status(201).send('Ich bin post middleware');
})
*/
// Teil 3 Routes 
const recordsRouter = require('./routes/recordsRouter');
const usersRouter = require('./routes/usersRouter');
const ordersRouter = require('./routes/ordersRouter');

app.use('/records', recordsRouter);
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

connect = async () =>
{
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/records");

        console.log(`MongoDB is connected on ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}
connect();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
