
 exports.meineMiddleware = (req, res, next) => {
    
    console.log('Middleware ausgeführt');

    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    next(); 
};


