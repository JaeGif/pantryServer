import express from 'express';
const router = express.Router();
import * as foodItemController from '../controllers/foodItem';

router.get('/foodItems', foodItemController.foodItems_get);
router.get('/foodItem/:id', foodItemController.foodItem_get);
router.put('/foodItems/:id', foodItemController.foodItem_put);
router.delete('/foodItems/:id', foodItemController.foodItem_delete);

export default router;
