"use client";
import { Opinion } from "@/generated/prisma";
import { CreateOpinionRequest, OpinionResponse } from "@/lib/types";
import { useEffect, useState } from "react";

 function getErrorMessage(error: unknown): string {
        if (error instanceof Error) return error.message;
        return String(error);
    }

export function useOpiniones() {
    const [opiniones, setOpiniones] = useState<Opinion[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchOpiniones = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/opiniones");
            const data: OpinionResponse = await res.json();

            if (data.success && Array.isArray(data.data)) {
                setOpiniones(data.data);
            } else {
                setError(data.error || "Error al obtener opiniones");
            }
        } catch (error: unknown) {
            setError(getErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    const createOpinion = async (opinion: CreateOpinionRequest) => {
        try {
            setLoading(true);
            const res = await fetch("/api/opiniones", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(opinion),
            });

            const data: OpinionResponse = await res.json();

            if (data.success) {
                await fetchOpiniones();
            }
            else {
                setError(data.error || "Error al crear opinión");
            }
        } catch (error: unknown) {
            setError(getErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOpiniones();
    }, []);


    return { opiniones, loading, error, fetchOpiniones, createOpinion };
}
