const User = require("../models/User");

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
    console.log('All users have been retrieved');
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
    console.log('User has been retrieved by ID');
  } catch (error) {
    /* console.error('Error fetching user by ID:', error); */
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
    console.log('New user has been created');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update user by ID
let products = [];

exports.getProductById = (req, res) => {

    const productId = req.params.id;
    const product = products.find(product => product.id === productId);
    if (!product) {
        return res.status(404).json({ message: 'Produkt nicht gefunden' });
    }
    res.json(product);
};

exports.updateProduct = (req,res) => {

    const productId = req.params.id;
    const updatedProductData = req.body;
    const productIndex = products.findIndex(product => product.id === productId);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Produkt nicht gefunden' });
    }
    products[productIndex] = { ...products[productIndex], ...updatedProductData };
    res.json(products[productIndex]);
};

exports.deleteProduct = (req,res) => {

    const productId = req.params.id;
    products = products.filter(product => product.id !== productId);
    res.status(204).send('Produkt wurde gelöscht');
};



exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
    console.log('User has been updated');
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await User.findByIdAndRemove(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).send('User has been deleted');
    console.log('User has been deleted');
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
