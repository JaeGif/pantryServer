import { prisma } from '../utils/prisma.service';

const deleteAllUsers = async () => {
  await prisma.user.deleteMany({}).then(() => console.log('Deleted all users'));
};

deleteAllUsers();
