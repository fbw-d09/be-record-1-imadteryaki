/* const mongoose = require("mongoose");
const Chance = require("chance");
const User = require("./models/User")
const Record = require("./models/Record")
const Order = require("./models/Order")
const { connect, closeConnection } = require("./configs/db");
const chance = new Chance();

require("dotenv").config();

// Function to create a random user
const createUser = () => {
  return {
    role: Math.random() < 0.3 ? "admin" : "member",
    username: chance.first(),
    age: chance.integer({ min: 16, max: 65 }),
    email: chance.email({ domain: "example.com" }),
    password: chance.hash(),
    country: chance.country({ full: true }),
  };
};

// Function to create a random record
const createRecord = () => {
  return {
    title: chance.sentence({ words: 3 }),
    artist: `${chance.first()} ${chance.last()}`,
    price: (Math.random() * 15).toFixed(2),
  };
};

// Function to find a random document in a model

/*  const findRandomDoc = async (Model) => {
    const count = await Model.countDocuments().exec();
    const randomIndex = Math.floor(Math.random() * count);
    return Model.findOne().skip(randomIndex).exec();
  }; */


  /* const createOrder = async () => { */
/*     const randomUser = await findRandomDoc(User);
    const randomRecord = await findRandomDoc(Record); */
   /*  return { */
      /* username: randomUser.username,
      recordTitle: randomRecord.title,  */
     /*  quantity: chance.integer({ min: 1, max: 5 }), */
/*     };
  };
 */
// Function to seed the database
/* const seedDatabase = async () => { */
/* 
  await connect();
   */
  // Seed User collection
/*   try { */

/*     const userPromises = Array.from({ length: 20 }, () =>
      User.create(createUser())
    );
    await Promise.all(userPromises);
    console.log("User's Database seeded successfully.");
  } catch (err) {
    console.error("Error seeding User's Database:", err.message);
  }
 */
  // Seed Record collection
/*   try {
    const recordPromises = Array.from({ length: 20 }, () =>
      Record.create(createRecord())
    );
    await Promise.all(recordPromises);
    console.log("Record's Database seeded successfully.");
  } catch (err) {
    console.error("Error seeding Record's Database:", err.message);
  } */

  // Seed Order collection
 /*  try {
    const orderPromises = Array.from({ length: 20 }, () =>
      Order.create(createOrder())
    );
    await Promise.all(orderPromises);
    console.log("Order's Database seeded successfully.");
  } catch (err) {
    console.error("Error seeding Order's Database:", err.message);
  }

  await closeConnection();
}; */
/* seedDatabase();
 */