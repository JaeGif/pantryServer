import { generateDummyRecipe } from '../data/fake';
import { prisma } from '../utils/prisma.service';

const addRecipes = async (quantity: number) => {
  const recipes = generateDummyRecipe(quantity);
  for (let i = 0; i < recipes.length; i++) {
    await prisma.recipe.create({}).then((recipe) => {
      console.log(`created recipe ${recipe.name} id: ${item.id}`);
    });
  }
  console.log('Completed adding recipes');
};

addRecipes(10);
