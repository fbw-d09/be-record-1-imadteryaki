const mongoose = require("mongoose");
const random = require("mongoose-random"); 
const Chance = require("chance");
const { User } = require("./models/userSchema");
const { Record } = require("./models/recordSchema");
const { Order } = require("./models/orderSchema");
const {connect, closeConnection} = require ("./configs/db")
 require('dotenv').config();
const chance = new Chance();



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

const createOrder = (user,record) => {
  const randomUser =  user
  
  const randomRecord = record

  return{
    username: randomUser.username, 
    recordstitle: randomRecord.title,
    quantity: chance.integer({ min: 1, max: 5 }),
  }
};


const seedDatabase = async () => {
  connect();
  
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
  .then(()=> console.log('Records Database seeded successfully'))
  .catch(err => console.log(err.message));


  await Order.insertMany([
    createOrder(User,Record),
    createOrder(User,Record),
    createOrder(User,Record),
    createOrder(User,Record),
    createOrder(User,Record),
    createOrder(User,Record),
    createOrder(User,Record),
    createOrder(User,Record),
    createOrder(User,Record),
    createOrder(User,Record),
    createOrder(User,Record),
    createOrder(User,Record),
    createOrder(User,Record),
    createOrder(User,Record),
    createOrder(User,Record),
   
  ])
  .then(()=> console.log('Orders database deeded successfully'))
  .catch((err)=> console.log(err.message));


  await closeConnection();
};

seedDatabase();
