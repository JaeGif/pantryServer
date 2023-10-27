import express from 'express';
const router = express.Router();
import * as recipeController from '../controllers/recipe';

router.get('/recipes', recipeController.recipes_get);
router.get('/recipe/:id', recipeController.recipe_get);
router.put('/recipes/:id', recipeController.recipe_put);
router.delete('/recipes/:id', recipeController.recipe_delete);

export default router;
