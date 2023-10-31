import { generateDummyFoodItem } from '../data/fake';
import { prisma } from '../utils/prisma.service';

const addFoodItem = async (quantity: number) => {
  const foodItems = generateDummyFoodItem(quantity);
  for (let i = 0; i < foodItems.length; i++) {
    await prisma.foodItem
      .create({
        data: {
          name: foodItems[i].name,
          quantity: foodItems[i].quantity,
          expiry: foodItems[i].expiry,
        },
      })
      .then((item) => {
        console.log(`created item ${item.name} id: ${item.id}`);
      });
  }
  console.log('Completed adding food items');
};

addFoodItem(10);
