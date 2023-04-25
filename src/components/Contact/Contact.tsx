"use client";

import type { Contact } from "@prisma/client";
import { MessageIcon } from "../icons";

function getWpLink(contact: Contact, baseMessage: string) {
  const message = baseMessage.replace(
    "{apelido}",
    contact?.nickname || contact.name
  );
  return `https://wa.me/55${contact.phone}?text=${message}`;
}

interface Props {
  contact: Contact;
  baseMessage: string;
}

export default function Contact({ contact, baseMessage }: Props) {
  return (
    <div>
      <p>
        <strong>{contact.name}</strong>
      </p>
      <p>{contact.phone}</p>
      <a href={getWpLink(contact, baseMessage)} target="_blank">
        <MessageIcon />
      </a>
    </div>
  );
}
