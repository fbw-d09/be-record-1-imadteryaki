let orders = [];

 exports.getOrders = (req,res) => {
    res.status(200).json(orders);
    console.log('Alle Bestellungen sind angezeigt')
};

exports.getOrderById = (req,res) => {
    const orderId = req.params.id;
    const order = orders.find(order => order.id === orderId);
    if (!order) {
        return res.status(404).json({ message: 'Bestellung nicht gefunden' });
    }
    res.status(200).json(order);
    console.log('Bestellung ist angezeigt')
};

exports.createOrder = (req,res) => {
    const newOrder = req.body;
    orders.push(newOrder);
    res.status(201).json(newOrder);
    console.log('eine Bestellung wurde erstellt')
};

exports.updateOrder = (req,res) => {
    const orderId = req.params.id;
    const updatedOrderData = req.body;
    const orderIndex = orders.findIndex(order => order.id === orderId);
    if (orderIndex === -1) {
        return res.status(404).json({ message: 'Bestellung nicht gefunden' });
    }
    orders[orderIndex] = { ...orders[orderIndex], ...updatedOrderData };
    res.status(200).json(orders[orderIndex]);
    console.log('eine Bestellung wurde aktualisiert')
};

exports.deleteOrder = (req,res) => {
    const orderId = req.params.id;
    orders = orders.filter(order => order.id !== orderId);
    res.status(204).send('Bestellung wurde gelöscht');
    console.log('eine Bestellung wurde gelöscht')
};
