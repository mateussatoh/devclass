/*
  Warnings:

  - The primary key for the `Class` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Module` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_modulesId_fkey";

-- AlterTable
ALTER TABLE "Class" DROP CONSTRAINT "Class_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "modulesId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Class_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Class_id_seq";

-- AlterTable
ALTER TABLE "Module" DROP CONSTRAINT "Module_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Module_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Module_id_seq";

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_modulesId_fkey" FOREIGN KEY ("modulesId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
