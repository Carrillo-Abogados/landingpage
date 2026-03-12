import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  nombre: string;
  email: string;
  telefono?: string;
  servicio?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, '').trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactFormData;
    const { nombre, email, telefono, servicio } = body;

    // Validation
    if (!nombre || !email) {
      return NextResponse.json(
        { error: 'Nombre y email son obligatorios.' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Email inválido.' },
        { status: 400 }
      );
    }

    if (nombre.length > 200 || email.length > 200) {
      return NextResponse.json(
        { error: 'Datos demasiado largos.' },
        { status: 400 }
      );
    }

    const sanitizedData = {
      nombre: sanitize(nombre),
      email: sanitize(email),
      telefono: telefono ? sanitize(telefono) : '',
      servicio: servicio ? sanitize(servicio) : '',
    };

    // Option A: Resend (if RESEND_API_KEY is configured)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const recipients = (process.env.CONTACT_EMAIL || 'asesora@carrilloabgd.com')
        .split(',')
        .map((e) => e.trim())
        .filter(Boolean);

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || 'Carrillo ABGD <noreply@send.carrilloabgd.com>',
          to: recipients,
          reply_to: sanitizedData.email,
          subject: `Nuevo lead: ${sanitizedData.nombre}`,
          html: `
            <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: #1a365d; padding: 24px; border-radius: 8px 8px 0 0;">
                <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Nuevo contacto desde carrilloabgd.com</h2>
              </div>
              <div style="background: #ffffff; padding: 24px; border: 1px solid #e2e8f0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #1a365d; width: 140px;">Nombre:</td>
                    <td style="padding: 8px 0; color: #333;">${sanitizedData.nombre}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #1a365d;">Email:</td>
                    <td style="padding: 8px 0; color: #333;"><a href="mailto:${sanitizedData.email}" style="color: #2563eb;">${sanitizedData.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #1a365d;">Teléfono:</td>
                    <td style="padding: 8px 0; color: #333;">${sanitizedData.telefono || 'No proporcionado'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #1a365d;">Servicio:</td>
                    <td style="padding: 8px 0; color: #333;">${sanitizedData.servicio || 'No especificado'}</td>
                  </tr>
                </table>
              </div>
              <div style="background: #f8fafc; padding: 16px 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
                <p style="color: #64748b; font-size: 12px; margin: 0;">Enviado desde el formulario de carrilloabgd.com — Responder a este correo contacta directamente al lead.</p>
              </div>
            </div>
          `,
        }),
      });

      if (!resendResponse.ok) {
        const errorText = await resendResponse.text();
        console.error('Resend error:', errorText);
        return NextResponse.json(
          { error: 'Error al enviar el mensaje. Intente de nuevo.' },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, method: 'email' });
    }

    // Fallback: Log to console (useful for development and Vercel logs)
    console.log('=== NEW CONTACT LEAD ===');
    console.log(JSON.stringify(sanitizedData, null, 2));
    console.log('========================');

    return NextResponse.json({ success: true, method: 'logged' });
  } catch {
    return NextResponse.json(
      { error: 'Error interno del servidor.' },
      { status: 500 }
    );
  }
}
