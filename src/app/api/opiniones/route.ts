import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { OpinionResponse } from "@/lib/types";

const prisma = new PrismaClient();

export async function GET(): Promise<NextResponse<OpinionResponse>> {
  try {
    const opiniones = await prisma.opinion.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      data: opiniones,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}