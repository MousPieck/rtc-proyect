import { Router } from 'express';
import {
  prodottiDeleteId,
  prodottiGet,
  prodottiGetId,
  prodottiPost,
  prodottiPut
} from '../controllers/prodotti';
import {
  checkProdottiEliminareId,
  checkProdottiGetId,
  checkProdottiModificareId,
  checkProdottiPostId
} from '../validation/validations';

const router = Router();

router.get('/', prodottiGet);
router.get('/id', checkProdottiGetId, prodottiGetId);
router.post('/id', checkProdottiPostId, prodottiPost);
router.put('/:id', checkProdottiModificareId, prodottiPut);
router.delete('/:id', checkProdottiEliminareId, prodottiDeleteId);
module.exports = router;
