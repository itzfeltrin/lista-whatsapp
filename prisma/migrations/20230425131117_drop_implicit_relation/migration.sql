/*
  Warnings:

  - You are about to drop the `_contact_message` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_contact_message" DROP CONSTRAINT "_contact_message_A_fkey";

-- DropForeignKey
ALTER TABLE "_contact_message" DROP CONSTRAINT "_contact_message_B_fkey";

-- DropTable
DROP TABLE "_contact_message";
