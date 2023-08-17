
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


