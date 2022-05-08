import { Router } from 'express';
import {
  prodottiDeleteId,
  prodottiGet,
  prodottiGetId,
  prodottiPost,
  prodottiPut
} from '../controllers/prodotti';
import { checkProdottiId, checkUtenteId } from '../validation/validations';
import { checktoken } from '../validation/validations';
const router = Router();

router.get('/', prodottiGet);
router.get('/id', checktoken, prodottiGetId);
router.post('/id', checktoken, prodottiPost);
router.put('/:id', checkProdottiId, prodottiPut);
router.delete('/:id', checkProdottiId, prodottiDeleteId);
module.exports = router;
