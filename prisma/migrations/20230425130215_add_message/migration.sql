/*
  Warnings:

  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TeamGame` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TeamGame" DROP CONSTRAINT "TeamGame_game_id_fkey";

-- DropForeignKey
ALTER TABLE "TeamGame" DROP CONSTRAINT "TeamGame_team_id_fkey";

-- DropTable
DROP TABLE "Game";

-- DropTable
DROP TABLE "Team";

-- DropTable
DROP TABLE "TeamGame";

-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT,
    "phone" TEXT NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "message" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContactToMessage" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "contact_phone_key" ON "contact"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "_ContactToMessage_AB_unique" ON "_ContactToMessage"("A", "B");

-- CreateIndex
CREATE INDEX "_ContactToMessage_B_index" ON "_ContactToMessage"("B");

-- AddForeignKey
ALTER TABLE "_ContactToMessage" ADD CONSTRAINT "_ContactToMessage_A_fkey" FOREIGN KEY ("A") REFERENCES "contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactToMessage" ADD CONSTRAINT "_ContactToMessage_B_fkey" FOREIGN KEY ("B") REFERENCES "message"("id") ON DELETE CASCADE ON UPDATE CASCADE;
