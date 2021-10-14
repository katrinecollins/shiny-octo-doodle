const { User } = require('../models');

const userController = {
    // get all users
    getAllUser(req, res) {
        User.find({})
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err));
    },

    // get one user by id
    getUserById(req, res) {
        User.findOne({ _id: req.params.id })
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err));
    },

    // create a user
    createUser(req, res) {
        User.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    // update a user by id
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id }, 
            req.body, 
            { new: true}
        )
          .then(data => {
            if (!data) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(data);
          })
          .catch(err => res.json(err));
      },

    // delete a user by id
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.id })
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err));
    }


}

module.exports = userController;