/*
  Warnings:

  - You are about to drop the `_ContactToMessage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ContactToMessage" DROP CONSTRAINT "_ContactToMessage_A_fkey";

-- DropForeignKey
ALTER TABLE "_ContactToMessage" DROP CONSTRAINT "_ContactToMessage_B_fkey";

-- DropTable
DROP TABLE "_ContactToMessage";

-- CreateTable
CREATE TABLE "_contact_message" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_contact_message_AB_unique" ON "_contact_message"("A", "B");

-- CreateIndex
CREATE INDEX "_contact_message_B_index" ON "_contact_message"("B");

-- AddForeignKey
ALTER TABLE "_contact_message" ADD CONSTRAINT "_contact_message_A_fkey" FOREIGN KEY ("A") REFERENCES "contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_contact_message" ADD CONSTRAINT "_contact_message_B_fkey" FOREIGN KEY ("B") REFERENCES "message"("id") ON DELETE CASCADE ON UPDATE CASCADE;
