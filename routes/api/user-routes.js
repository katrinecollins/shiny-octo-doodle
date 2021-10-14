const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller')


// /api/users/
router
  .route('/')
  .get(getAllUser)
  .post(createUser);


// /api/users/12312
  router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  module.exports = router;