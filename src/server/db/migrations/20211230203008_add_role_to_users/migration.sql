-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "IncomeType" AS ENUM ('PRIMARY', 'SECONDARY', 'SIDE_HUSTLE', 'SPOUSE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT E'USER';

-- CreateTable
CREATE TABLE "AccountStatuses" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "onboarding" BOOLEAN NOT NULL DEFAULT true,
    "income" BOOLEAN NOT NULL DEFAULT false,
    "necessities" BOOLEAN NOT NULL DEFAULT false,
    "savings" BOOLEAN NOT NULL DEFAULT false,
    "investments" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Income" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "amount" MONEY NOT NULL,
    "type" "IncomeType" NOT NULL,

    PRIMARY KEY ("id")
);
