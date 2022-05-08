import { Router } from 'express';
import { token } from '../controllers/token';
import { checktoken } from '../validation/validations';
const router = Router();

router.post('/', checktoken, token);
module.exports = router;
