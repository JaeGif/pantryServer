import { prisma } from '../utils/prisma.service';

const deleteAllFoodItems = async () => {
  await prisma.foodItem
    .deleteMany({})
    .then(() => console.log('Deleted all food items'));
};

deleteAllFoodItems();
