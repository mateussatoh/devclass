/*
  Warnings:

  - You are about to drop the column `durationInSeconds` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `durationInSeconds` on the `Module` table. All the data in the column will be lost.
  - Added the required column `durationInMinutes` to the `Class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "durationInSeconds",
ADD COLUMN     "durationInMinutes" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Module" DROP COLUMN "durationInSeconds",
ADD COLUMN     "durationInMinutes" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isAdmin" SET DEFAULT false;
