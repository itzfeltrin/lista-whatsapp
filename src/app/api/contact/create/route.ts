import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const data = await prisma.contact.create({ data: { ...body } });
  return NextResponse.json({ data });
}
