const router = require("express").Router();
const Advanced = require('../models/advanced');

//get ALL advanced
router.get('/', async (req, res, next) => {
  try {
    const advanced = await Advanced.find({})
    res.status(200).json(advanced);
  } catch (err) {
    next(err)
  }
})

module.exports = router;