const router = require('express').Router();
const Discuss = require('../models/discuss');

router.get('/', async (req, res, next) => {
  try {
    const discussion = await Discuss.find()
    res.json(discussion);
  } catch (err) {
    next(err);
  }
});


router.post('/', async (req, res, next) => {
  try {
    const newDisucss = await Discuss.create(req.body)
    res.json(newDisucss)
  }
  catch (err) {
    console.log(err)
    next(err)
  }
})

module.exports = router;

