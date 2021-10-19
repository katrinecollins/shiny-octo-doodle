const router = require('express').Router();
const apiRoutes = require('./api');

router.use((req, res) => {
    return res.send("That is the wrong route :(!")
})

router.use('/api', apiRoutes);

module.exports = router;