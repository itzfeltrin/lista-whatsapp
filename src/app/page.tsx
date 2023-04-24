import { prisma } from "@/lib/prisma";
import { ContactForm } from "@/components/ContactForm";
import styles from "./page.module.css";

export const revalidate = 10;

export default async function Home() {
  const contacts = await prisma.contact.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Lista de contatos</h1>
      <ContactForm />
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p>
              <strong>{contact.name}</strong> - {contact.phone}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
