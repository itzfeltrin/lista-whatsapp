"use client";

import { FormEvent, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Field } from "../Field";

export default function MessageForm() {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [text, setText] = useState("");

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    await fetch("/api/message/create", {
      body: JSON.stringify({ text }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    setText("");
    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <form
      onSubmit={handleSave}
      className="flex flex-col gap-4 rounded-md border-2 p-4 bg-gray-200 drop-shadow-lg"
    >
      <Field label="Texto">
        <textarea
          id="text"
          name="text"
          className="flex-1 rounded-sm p-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
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
