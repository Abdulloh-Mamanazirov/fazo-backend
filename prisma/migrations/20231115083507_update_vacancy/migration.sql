/*
  Warnings:

  - You are about to drop the column `desc` on the `vacancies` table. All the data in the column will be lost.
  - Added the required column `days` to the `vacancies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `offer` to the `vacancies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `require` to the `vacancies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `vacancies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "vacancies" DROP COLUMN "desc",
ADD COLUMN     "days" TEXT NOT NULL,
ADD COLUMN     "offer" TEXT NOT NULL,
ADD COLUMN     "require" TEXT NOT NULL,
ADD COLUMN     "salary" TEXT,
ADD COLUMN     "time" TEXT NOT NULL;
