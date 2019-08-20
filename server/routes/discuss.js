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


router.get('/:id', async (req, res, next) => {
  try {
    const discuss = await Discuss.findById({ _id: req.params.id })
    console.log("product", discuss)
    res.send(discuss)
  } catch (err) {
    next(err)
  }
})


router.post('/', async (req, res, next) => {
  try {
    const newDisucss = await Discuss.create(req.body)
    res.json(newDisucss)
  }
  catch (err) {
    console.error(err)
    next(err)
  }
})

module.exports = router;

