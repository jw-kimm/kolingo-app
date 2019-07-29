const router = require("express").Router();
const Matching = require('../models/matching');

//get ALL matching
router.get('/', async (req, res, next) => {
  try {
    const matching = await Matching.find({})
    res.status(200).json(matching);
  } catch (err) {
    next(err)
  }
})

module.exports = router;