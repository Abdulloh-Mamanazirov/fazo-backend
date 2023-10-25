/*
  Warnings:

  - The primary key for the `links` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `links` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `links` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `links` table. All the data in the column will be lost.
  - Added the required column `facebook` to the `links` table without a default value. This is not possible if the table is not empty.
  - Added the required column `github` to the `links` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instagram` to the `links` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedIn` to the `links` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telegram` to the `links` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "links" DROP CONSTRAINT "links_pkey",
DROP COLUMN "created_at",
DROP COLUMN "id",
DROP COLUMN "link",
ADD COLUMN     "facebook" TEXT NOT NULL,
ADD COLUMN     "github" TEXT NOT NULL,
ADD COLUMN     "instagram" TEXT NOT NULL,
ADD COLUMN     "linkedIn" TEXT NOT NULL,
ADD COLUMN     "telegram" TEXT NOT NULL,
ADD CONSTRAINT "links_pkey" PRIMARY KEY ("facebook", "instagram", "telegram", "linkedIn", "github");
