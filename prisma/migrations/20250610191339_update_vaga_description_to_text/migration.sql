/*
  Warnings:

  - You are about to alter the column `pcd` on the `vaga` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - You are about to alter the column `cnh` on the `vaga` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(4)`.

*/
-- AlterTable
ALTER TABLE `vaga` MODIFY `pcd` VARCHAR(191) NOT NULL,
    MODIFY `cnh` VARCHAR(4) NOT NULL,
    MODIFY `description` TEXT NOT NULL;
