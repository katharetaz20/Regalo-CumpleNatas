export default function handler(req, res) {
  const targetDate = new Date('2026-06-24T00:00:00-05:00'); // Fecha en Bogotá
  const now = new Date();

  // 👇 Usa SOLO una variable para la imagen
  const IMAGE_URL = 'https://regalo-cumple-natas.vercel.app/Tiquete_regalo.png';

  if (now >= targetDate) {
    // Redirige al archivo PNG cuando llegue la fecha
    return res.writeHead(302, { Location: IMAGE_URL }).end();
  } else {
    // Mensaje antes de la fecha
    const mensaje = 'Tu regalo se revelará el 24 de junio 2026 a partir de la media noche.';

    return res.status(200).send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>🎁 Sorpresa</title>
          <style>
            body {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              font-family: 'Arial', sans-serif;
              text-align: center;
              background-color: #fff5fa;
              color: #444;
              flex-direction: column;
            }
            h2 {
              color: #e75480;
              font-size: 1.6em;
            }
            p {
              font-size: 1.2em;
            }
            .heart {
              color: #ff80b3;
              font-size: 1.5em;
            }
          </style>
        </head>
        <body>
          <div>
            <h2>${mensaje}</h2>
            <p>Te encantará... Ten paciencia... Te amo <span class="heart">💗</span></p>
          </div>
        </body>
      </html>
    `);
  }
}
