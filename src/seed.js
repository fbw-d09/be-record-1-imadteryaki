const mongoose = require("mongoose");
const Chance = require("chance");
const { User } = require("./models/userSchema");
const { Record } = require("./models/recordSchema");
const { Order } = require("./models/orderSchema");
const {connect, closeConnection} = require ("./configs/db")
const chance = new Chance();

require('dotenv').config();

const createUser = () => {
  return {
    role: Math.random() < 0.3 ? 'admin' : 'member',
    username: chance.first(),
    age: chance.integer({ min: 16, max: 65 }),
    email: chance.email({ domain: 'example.com' }),
    password: chance.hash(),
    country: chance.country({ full: true })
  }
};

const createRecord = () => {
  return {
    title: chance.sentence({ words: 3}),
    artist: `${chance.first()} ${chance.last()}`,
    price: Math.random().toFixed(2) * 15
  }
}

const findRandomDoc = async (model) => {
  
  const count = await model.countDocuments();
  const randomIndex = chance.integer({ min: 0, max: count - 1 });
  return model.findOne().skip(randomIndex);
}

const createOrder = async () => {

  const randomUser = await findRandomDoc(User);
  const randomRecord = await findRandomDoc(Record);
  return{
    username: randomUser.username, 
    recordstitle: randomRecord.title,
    quantity: chance.integer({ min: 1, max: 5 }),
  }
};


const seedDatabase = async () => {
 await connect();
 
  await User.insertMany([
    createUser(),
    createUser(),
    createUser(),
    createUser(),
    createUser(),
    createUser(),
    createUser(),
    createUser(),
    createUser(),
    createUser(),
    createUser()
    ])
    .then (()=> console.log("User's Database seeded successfully.")) 
   .catch (err => {
    console.log(err.message);
  });

  await Record.insertMany([
    createRecord(),
    createRecord(),
    createRecord(),
    createRecord(),
    createRecord(),
    createRecord(),
    createRecord(),
    createRecord(),
    createRecord(),
    createRecord(),
    createRecord(),
    createRecord(),
    createRecord(),
    createRecord(),
    createRecord(),
    createRecord(),
    createRecord(),
    createRecord(),
  ])
  .then(()=> console.log("Record's Database seeded successfully"))
  .catch(err => console.log(err.message));


  await Order.insertMany([
    createOrder(),
    createOrder(),
    createOrder(),
    createOrder(),
    createOrder(),
    createOrder(),
    createOrder(),
    createOrder(),
    createOrder(),
    createOrder(),
    createOrder(),
    createOrder(),
    createOrder(),
    createOrder(),
    createOrder(),
    createOrder(),
    createOrder(),
   
  ])
  .then(()=> console.log("Order's database deeded successfully"))
  .catch((err)=> console.log(err.message));


  await closeConnection();
  
  
};

seedDatabase();