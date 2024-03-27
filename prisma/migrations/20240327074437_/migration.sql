/*
  Warnings:

  - You are about to drop the column `imageId` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_imageId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_imageId_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `imageId`,
    ADD COLUMN `imageUrl` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `imageId`,
    ADD COLUMN `imageUrl` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `image`;
