const router = require('express').Router();
const isAuth = require('../middlewares/verification');
const validation = require('../middlewares/validation');
const postSchema = require('../middlewares/post-schema');
const { createPost, getPost, updatePost, deletePost, loadPosts, uploadPictures, myPosts } = require('../controllers/posts');

const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
router.post('/', isAuth, validation(postSchema.postSchema, 'body'), createPost);  //validator 
router.post('/:post_id/pictures', isAuth, upload.array('pictures'), uploadPictures);
router.get('/allposts', loadPosts);
router.get('/post/:post_id', isAuth, getPost);
router.put('/:post_id', isAuth, validation(postSchema.updateSchema, 'body'), updatePost);
router.delete('/:post_id', isAuth, deletePost);
router.get('/myposts', isAuth, myPosts)

module.exports = router;