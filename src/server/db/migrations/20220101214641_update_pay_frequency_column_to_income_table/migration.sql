/*
  Warnings:

  - You are about to drop the column `amount` on the `Income` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Income` table. All the data in the column will be lost.
  - Added the required column `incomeType` to the `Income` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payAmount` to the `Income` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payFrequency` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PayFrequency" AS ENUM ('WEEKLY', 'BI_WEEKLY', 'MONTHLY');

-- AlterTable
ALTER TABLE "Income" DROP COLUMN "amount",
DROP COLUMN "type",
ADD COLUMN     "incomeType" "IncomeType" NOT NULL,
ADD COLUMN     "payAmount" MONEY NOT NULL,
ADD COLUMN     "payFrequency" "PayFrequency" NOT NULL;
