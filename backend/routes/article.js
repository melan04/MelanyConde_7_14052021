// imports
const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/article');
const commentCtrl = require('../controllers/comment');
const likeCtrl = require('../controllers/like');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Routes
router.get('/', auth, multer, articleCtrl.findAllArticles);
router.get('/:id/comments', auth, commentCtrl.findAllComments);
router.get('/:id/likes', auth, likeCtrl.findAllLikes);
router.get('/:id', auth, articleCtrl.findOneArticle);
router.post('/', auth, multer, articleCtrl.createArticle);
router.put('/:id', auth, articleCtrl.modifyArticle);
router.delete('/:id', auth, articleCtrl.deleteArticle);

module.exports = router;