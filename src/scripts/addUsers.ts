import { generateDummyUsers } from '../data/fake';
import { prisma } from '../utils/prisma.service';

const addUsers = async (quantity: number) => {
  const users = generateDummyUsers(quantity);
  for (let i = 0; i < users.length; i++) {
    await prisma.user
      .create({
        data: { name: users[i].name, email: users[i].email },
      })
      .then((user) => {
        console.log(`created user ${user.name} with id: ${user.id}`);
      });
  }
  console.log('Completed adding users');
};

addUsers(10);
