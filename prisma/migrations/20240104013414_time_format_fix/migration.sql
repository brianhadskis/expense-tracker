/*
  Warnings:

  - You are about to alter the column `date` on the `transaction` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `transaction` MODIFY `date` DATETIME NOT NULL;
