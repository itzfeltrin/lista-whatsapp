import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const data = await prisma.message.create({
    data: {
      text: body.text,
    },
  });
  return NextResponse.json({ data });
}
