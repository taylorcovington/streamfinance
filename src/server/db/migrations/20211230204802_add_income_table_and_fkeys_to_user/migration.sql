/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `AccountStatuses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `AccountStatuses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AccountStatuses" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Income" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AccountStatuses.userId_unique" ON "AccountStatuses"("userId");

-- AddForeignKey
ALTER TABLE "AccountStatuses" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Income" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
