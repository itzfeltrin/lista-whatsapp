"use client";

import { ReactNode } from "react";

export default function Column({ children }: { children: ReactNode }) {
  return <div className="min-h-screen w-1/4 p-2">{children}</div>;
}
