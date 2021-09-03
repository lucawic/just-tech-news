const User = require('./User');
const { User } = require('../../models');

//GET /api/users
router.get('/', (req, res) => {
    //access the user model and run .findALl() method)
    User.findAll()
    .then (dbUserData => res.json (dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get /api/users/1
router.get('/', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then (dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'NO user found with this id' });
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/users
router.post('/', (req, res) => {
    //expects {username: lucawic, email: lucaswick@email.arizona.edu, password: password1 }
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT /api/user/1
router.put('/:id', (req, res) => {
    //expects {username: lucawic, email: lucaswick@email.arizona.edu, password: password1 }

    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData[0]) {
            res.status(404).json({ message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete ('/:id', (req,res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;

//module.exports = { User };