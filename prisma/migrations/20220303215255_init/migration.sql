/*
  Warnings:

  - You are about to drop the column `module` on the `Class` table. All the data in the column will be lost.
  - Added the required column `durationInSeconds` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Made the column `modulesId` on table `Class` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `description` to the `Modules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `durationInSeconds` to the `Modules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tech` to the `Modules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalClasses` to the `Modules` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_modulesId_fkey";

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "module",
ADD COLUMN     "durationInSeconds" INTEGER NOT NULL,
ALTER COLUMN "modulesId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Modules" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "durationInSeconds" INTEGER NOT NULL,
ADD COLUMN     "tech" TEXT NOT NULL,
ADD COLUMN     "totalClasses" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_modulesId_fkey" FOREIGN KEY ("modulesId") REFERENCES "Modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
