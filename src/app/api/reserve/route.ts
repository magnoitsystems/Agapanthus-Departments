import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    console.log('=== INICIO API ROUTE ===');

    try {
        // Debug 1: Variables de entorno

        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json(
                { error: 'API key de Resend no configurada' },
                { status: 500 }
            );
        }

        // Debug 2: Inicializar Resend
        console.log('2. Inicializando Resend...');
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Debug 3: Leer body del request
        console.log('3. Leyendo datos del formulario...');
        const body = await request.json();
        console.log('   - Body recibido:', body);

        const { nameAndLastname, tel, cant, date1, date2 } = body;
        console.log('   - Datos extraídos:', { nameAndLastname, tel, cant, date1, date2 });

        // Debug 4: Configurar email
        console.log('4. Configurando email...');
        const emailConfig = {
            from: 'noreply@agapanthuslasmarias.com',
            to: ['agapanthuslasmarias@gmail.com'],
            subject: `Consulta de reserva de ${nameAndLastname}`,
            html: `
            <div>
                <h1>Nueva consulta de reserva</h1>
                <p>Has recibido una nueva consulta a través del formulario web.</p>
                <hr>
                <h2>Datos del Contacto:</h2>
                <ul>
                  <li><strong>Nombre y Apellido:</strong> ${nameAndLastname}</li>
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
        };

        const { data, error } = await resend.emails.send(emailConfig);

        if (error) {
            return NextResponse.json({
                error: 'Error al enviar el correo',
                details: error
            }, { status: 500 });
        }

        return NextResponse.json({
            ok: true,
            message: '¡Correo enviado con éxito!',
            data
        });

    } catch (error) {
        return NextResponse.json({
            error: 'Error interno del servidor',
        }, { status: 500 });
    }
}