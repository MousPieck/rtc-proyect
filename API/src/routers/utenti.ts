import { Router } from 'express';
import {
  utenteDelete,
  utenteGet,
  utenteGetID,
  utentePut
} from '../controllers/utenti';
import { checktoken } from '../validation/validations';

const router = Router();

router.get('/', utenteGet);

router.get('/:id', checktoken, utenteGetID);

router.put('/:id', checktoken, utentePut);

router.delete('/:id', checktoken, utenteDelete);

module.exports = router;
