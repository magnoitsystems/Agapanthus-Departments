import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, tel, cant, date1, date2 } = body;

        const { data, error } = await resend.emails.send({

            from: 'onboarding@resend.dev',

            to: ['magno.itsystem@gmail.com'],

            subject: `Consulta de reserva de ${name}`,
            html: `
            <div>
            <h1>Nueva consulta de reserva</h1>
                    <p>Has recibido una nueva consulta a través del formulario web.</p>
                    <hr>
                    <h2>Datos del Contacto:</h2>
                    <ul>
                      <li><strong>Nombre y Apellido:</strong> ${name}</li>
                      <li><strong>Teléfono:</strong> ${tel}</li>
                    </ul>
                    <h2>Datos de la Reserva:</h2>
                    <ul>
                      <li><strong>Desde:</strong> ${date1}</li>
                      <li><strong>Hasta:</strong> ${date2}</li>
                      <li><strong>Cantidad de personas:</strong> ${cant}</li>
                    </ul>
                    </div>
       
      `,
        });

        if (error) {
            console.error({ error });
            return NextResponse.json({ error: 'Error al enviar el correo.' }, { status: 500 });
        }

        return NextResponse.json({ message: '¡Correo enviado con éxito!', data });

    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: 'Un error desconocido ocurrió' }, { status: 500 });
    }
}