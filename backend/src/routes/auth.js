const router = require('express').Router();
const { signup, signin, current } = require('../controllers/auth');
const validation = require('../middlewares/validation');
const userSchema = require('../middlewares/user-schema');
const isAuth = require('../middlewares/verification')


router.post('/signup', validation(userSchema.authSchema, 'body'), signup);
router.post('/signin', validation(userSchema.loginSchema, 'body'), signin);
router.get('/current',isAuth,current)


module.exports = router;