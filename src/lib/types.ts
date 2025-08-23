import { Opinion } from "@/generated/prisma"

export type { Opinion }

export interface CreateOpinionRequest {
  contenido: string
  autor: string
}

export interface OpinionResponse {
  success: boolean
  data?: Opinion | Opinion[]
  error?: string
}