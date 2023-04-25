import { Contact } from "@/components/Contact";
import { ContactForm } from "@/components/ContactForm";
import { Column } from "@/components/Column";
import MessageForm from "@/components/MessageForm/MessageForm";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const [contacts, messages, contactsOnMessages] = await Promise.all([
    prisma.contact.findMany(),
    prisma.message.findMany(),
    prisma.contactsOnMessages.findMany({
      include: { contact: true, message: true },
    }),
  ]);
  return (
    <main className="flex">
      <Column>
        <ContactForm />
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} baseMessage={""} />
            </li>
          ))}
        </ul>
      </Column>
      <Column>
        <MessageForm />
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              <p>{message.text}</p>
            </li>
          ))}
        </ul>
      </Column>
      <Column>
        <ul>
          {contactsOnMessages.map(({ contact, message }) => {
            const id = [contact.id, message.id].join("-");
            return (
              <li key={id}>
                <p>
                  {contact.name} - {message.text}
                </p>
              </li>
            );
          })}
        </ul>
      </Column>
    </main>
  );
}
