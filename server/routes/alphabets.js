const router = require("express").Router();
const Alphabets = require('../models/alphabets');

//get ALL alphabets
router.get('/', async (req, res, next) => {
  try {
    const alphabets = await Alphabets.find({})
    res.status(200).json(alphabets);
  } catch (err) {
    next(err)
  }
})

module.exports = router;