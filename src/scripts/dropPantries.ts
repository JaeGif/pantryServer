import { prisma } from '../utils/prisma.service';

const deleteAllPantries = async () => {
  await prisma.pantry
    .deleteMany({})
    .then(() => console.log('Deleted all pantries'));
};

deleteAllPantries();
