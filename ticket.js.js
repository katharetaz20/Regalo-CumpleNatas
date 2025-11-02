export default function handler(req, res) {
  const targetDate = new Date('2026-06-24T00:00:00-05:00'); // Fecha en Bogotá
  const now = new Date();

  const IMAGE_URL = 'https://tu-app.vercel.app/nataly_tiquete.png'; // Cambia luego

  if (now >= targetDate) {
    return res.writeHead(302, { Location: IMAGE_URL }).end();
  } else {
    const mensaje = 'Estará disponible únicamente para el 24 de junio desde a media noche';
    return res.status(200).send(`
      <!doctype html>
      <html>
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
        <title>🎁 Sorpresa</title></head>
        <body style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Arial;text-align:center;">
          <div>
            <h2>${mensaje}</h2>
            <p>Falta poco, mi amor 💛</p>
          </div>
        </body>
      </html>
    `);
  }
}
