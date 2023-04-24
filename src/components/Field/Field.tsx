import { ReactNode } from "react";

interface Props {
  label: string;
  children: ReactNode;
}

export default function Field({ label, children }: Props) {
  return (
    <div className="flex gap-4 pl-2 border-l-4 border-green-500 rounded-md items-center">
      <label htmlFor="text" className="w-16">
        {label}:
      </label>
      {children}
    </div>
  );
}
