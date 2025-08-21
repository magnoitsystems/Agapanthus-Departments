import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { CreateOpinionRequest, OpinionResponse } from "@/lib/types";

const prisma = new PrismaClient();

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

export async function GET(): Promise<NextResponse<OpinionResponse>> {
  try {
    const opiniones = await prisma.opinion.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      data: opiniones,
    });
  } catch (error: unknown) {
    return NextResponse.json(
      { success: false, error: getErrorMessage(error) },
      { status: 500 }
    );
  }
}

export async function POST(req: Request): Promise<NextResponse<OpinionResponse>> {
  try {
    const body: CreateOpinionRequest = await req.json();

    if (!body.autor || !body.contenido) {
      return NextResponse.json(
        { success: false, error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    const nuevaOpinion = await prisma.opinion.create({
      data: {
        autor: body.autor,
        contenido: body.contenido,
      },
    });

    return NextResponse.json({
      success: true,
      data: nuevaOpinion,
    });
  } catch (error: unknown) {
    return NextResponse.json(
      { success: false, error: getErrorMessage(error) },
      { status: 500 }
    );
  }
}
