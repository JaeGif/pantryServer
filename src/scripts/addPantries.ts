import { generateDummyPantries } from '../data/fake';
import { prisma } from '../utils/prisma.service';

const addPantries = async (quantity: number) => {
  const pantries = generateDummyPantries(quantity);
  for (let i = 0; i < pantries.length; i++) {
    await prisma.pantry.create({}).then((pantry) => {
      console.log(`created pantry id: ${pantry.id}`);
    });
  }
  console.log('Completed adding pantries');
};

addPantries(10);
