import { Router } from 'express';
import { loginPost, signUpPost } from '../controllers/login';
import { checkLogin, checkSignUp } from '../validation/validations';

const router = Router();

router.post('/login', checkLogin, loginPost);
router.post('/signup', checkSignUp, signUpPost);

module.exports = router;
