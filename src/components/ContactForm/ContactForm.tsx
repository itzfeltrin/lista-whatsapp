"use client";

import { FormEvent, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Prisma } from "@prisma/client";
import { Field } from "../Field";

type ContactForm = Prisma.ContactCreateInput;

export default function ContactForm() {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [form, setForm] = useState<ContactForm>({ name: "", phone: "" });

  function handleChangeInput(key: keyof ContactForm, value: string) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    try {
      await fetch("/api/contact/create", {
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
    } catch (ex) {
      console.log("front-end exception", ex);
    }
    setForm({ name: "", phone: "" });
    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <form
      onSubmit={handleSave}
      className="flex flex-col gap-4 rounded-md border-2 p-4 bg-gray-200 drop-shadow-lg"
    >
      <Field label="Nome">
        <input
          id="name"
          name="name"
          className="flex-1 rounded-sm p-1"
          type="tel"
          value={form.name}
          onChange={(e) => handleChangeInput("name", e.target.value)}
        />
      </Field>
      <Field label="Telefone">
        <input
          id="phone"
          name="phone"
          className="flex-1 rounded-sm p-1"
          type="tel"
          value={form.phone}
          onChange={(e) => handleChangeInput("phone", e.target.value)}
        />
      </Field>
      <input
        type="submit"
        value="Criar"
        className="w-full bg-green-400 text-center font-bold py-2 rounded-sm text-white hover:bg-green-500 cursor-pointer"
      />
    </form>
  );
}
