-- AlterTable
ALTER TABLE `transaction` MODIFY `date` DATETIME NOT NULL,
    MODIFY `time` BOOLEAN NOT NULL DEFAULT false;
