export default function handler(req, res) {
  const targetDate = new Date('2026-06-24T00:00:00-05:00'); // Fecha en Bogotá
  const now = new Date();

  const IMAGE_URL = 'https://regalo-cumple-natas.vercel.app/Tiquete_regalo.png';

  if (now >= targetDate) {
    // Redirige a la imagen después de la fecha
    return res.writeHead(302, { Location: IMAGE_URL }).end();
  } else {
   
    const mensaje = 'Tu regalo se revelará el 24 de junio 2026 a partir de la media noche. Te encantará... Ten paciencia... Te Amo 💗';
    
    return res.status(200).send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <title>🎁 Sorpresa</title>
        </head>
        <body style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Arial;text-align:center;background-color:#fff0f6;">
          <div>
            <h2 style="color:#e91e63;max-width:90%;margin:0 auto;">${mensaje}</h2>
          </div>
        </body>
      </html>
    `);
  }
}
