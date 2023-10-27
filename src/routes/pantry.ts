import express from 'express';
const router = express.Router();
import * as pantryController from '../controllers/pantry';

router.get('/pantries', pantryController.pantries_get);
router.get('/pantry/:id', pantryController.pantry_get);
router.put('/pantries/:id', pantryController.pantry_put);
router.delete('/pantries/:id', pantryController.pantry_delete);

export default router;
