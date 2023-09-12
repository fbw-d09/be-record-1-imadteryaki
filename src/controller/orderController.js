const Order = require("../models/Record");

// Get all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
    console.log('All orders have been retrieved');
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
  const orderId = req.params.id;
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(order);
    console.log('Order has been retrieved by ID');
  } catch (error) {
    console.error('Error fetching Order by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new Order
exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
    console.log('New order has been created');
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update order by ID
exports.updateOrder = async (req, res) => {
  const orderId = req.params.id;
  const updatedOrderData = req.body;
  try {
    const updatedOrder = await User.findByIdAndUpdate(orderId, updatedOrderData, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(updatedOrder);
    console.log('Order has been updated');
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete order by ID
exports.deleteOrder = async (req, res) => {
  const orderId = req.params.id;
  try {
    const deletedOrder = await User.findByIdAndRemove(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(204).send('Order has been deleted');
    console.log('Order has been deleted');
  } catch (error) {
    console.error('Error deleting Order:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
