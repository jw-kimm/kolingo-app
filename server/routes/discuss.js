const router = require('express').Router({ mergeParams: true });
const Discuss = require('../models/discuss');
// const { Comment } = require("../models/Comment");
const auth = require('../middleware/auth')

//get All discussion
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
    const newDiscuss = await Discuss.create(req.body)
    res.json(newDiscuss)
  }
  catch (err) {
    console.log(err)
    next(err)
  }
})

//get Single Discussion
router.get('/:id', async (req, res, next) => {
  console.log(req.params.id)

  debugger
  try {
    const singleDiscuss = await Discuss.findById(req.params.id)
    res.json(singleDiscuss)
  } catch (err) {
    next(err)
  }
})

//post reply(comment)
// router.patch('/:id', async (req, res, next) => {
//   console.log('id:', req.params.id)
//   console.log('req.body', req.body)
//   console.log('req.body.comment:', req.body.comments)
//   let newComment = await Discuss.update(req.body.comments),
//     // {
//     //   $push: {
//     //     comments: {
//     //       content: req.body.content,
//     //       author: req.body.author,
//     //       createdAt: req.body.createdAt
//     //     }
//     //   }
//     }
//   res.send(newComment)
//   // try {
//   //   const comment = await Discuss.findById(req.params.id)
//   //   if (req.body._id) {
//   //     delete req.body._id;
//   //   }
//   //   for (let c in req.body) {
//   //     comment[c] = req.body[c]
//   //   }
//   //   comment.save();
//   //   res.json(comment)
//   // } catch (err) {
//   //   next(err)
//   // }
// })

// router.post("/comments", (req, res) => {

//   const comment = new Comment(req.body)

//   comment.save((err, comment) => {
//     if (err) return res.json({ success: false, err })

//     Comment.find({ '_id': comment._id })
//       .populate('author')
//       .exec((err, result) => {
//         if (err) return res.json({ success: false, err })
//         return res.status(200).json({ success: true, result })
//       })
//   })

// })

// router.post("/getComments", (req, res) => {

//   Comment.find({ "discussionId": req.body.discussionId })
//     .populate('author')
//     .exec((err, comments) => {
//       if (err) return res.status(400).send(err)
//       res.status(200).json({ success: true, comments })
//     })

// });

// router.get('/:id/comment', async (req, res, next) => {
//   const singleComment = await Discuss.findOne({ _id: req.params.commentId }).populate('comments');
//   res.send(singleComment)
// }
// router.delete("/:id", auth, async (req, res) => {
//   try {
//     const deletedDiscuss = await Discuss.findById(req.params.id)
//     res.json(deletedDiscuss)
//   }
//   catch (err) {
//     console.log(err)
//   }
// })

module.exports = router;

