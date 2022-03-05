/*
  Warnings:

  - You are about to drop the `Modules` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_modulesId_fkey";

-- DropTable
DROP TABLE "Modules";

-- CreateTable
CREATE TABLE "Module" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "durationInSeconds" INTEGER NOT NULL,
    "tech" TEXT NOT NULL,
    "totalClasses" INTEGER NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_modulesId_fkey" FOREIGN KEY ("modulesId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
