
let users = [];

exports.getUsers = (req,res) => {
    res.status(200).json(users);
    console.log('Alle Nutzer sind angezeigt')
};

exports.getUserById = (req,res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'Nutzer nicht gefunden' });
    }
    res.status(200).json(user);
    console.log('user ist angezeigt')
};

exports.createUser = (req,res) => {
    const newUser = req.body;
    users.push(newUser);
    console.log(newUser)
    res.status(201).json(newUser);
    console.log('neuer Nutzer wurde erstellt', users)
};

exports.updateUser = (req,res) => {
    const userId = req.params.id;
    const updatedUserData = req.body;
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'Nutzer nicht gefunden' });
    }
    users[userIndex] = { ...users[userIndex], ...updatedUserData };
    res.status(200).json(users[userIndex]);
    console.log('ein Nuzer wurde aktualisiert')
};

exports.deleteUser = (req,res) => {
    const userId = req.params.id;
    users = users.filter(user => user.id !== userId);
    res.status(204).send('user wurde gelöscht');
    console.log('User wurde gelöscht')
};

