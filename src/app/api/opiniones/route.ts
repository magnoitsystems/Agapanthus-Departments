import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { CreateOpinionRequest, OpinionResponse } from "@/lib/types";

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
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}