-- DropForeignKey
ALTER TABLE "FoodItem" DROP CONSTRAINT "FoodItem_pantryId_fkey";

-- AlterTable
ALTER TABLE "FoodItem" ALTER COLUMN "pantryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "FoodItem" ADD CONSTRAINT "FoodItem_pantryId_fkey" FOREIGN KEY ("pantryId") REFERENCES "Pantry"("id") ON DELETE SET NULL ON UPDATE CASCADE;
