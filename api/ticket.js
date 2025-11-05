export default function handler(req, res) {
  const targetDate = new Date('2026-06-24T00:00:00-05:00'); // Fecha en Bogotá
  const now = new Date();

  // URL FINAL DE LA IMAGEN (solo una vez)
  const IMAGE_URL = 'https://regalo-cumple-natas.vercel.app/Tiquete_regalo.png';

  if (now >= targetDate) {
    // Redirigir a la imagen cuando llegue la fecha
    return res.writeHead(302, { Location: IMAGE_URL }).end();
  } else {
    // Mostrar mensaje antes de la fecha
    const mensaje = 'Tu regalo estará disponible el 24 de junio de 2026 a partir de la media noche 💝';

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
              margin: 0;
              background: linear-gradient(180deg, #ffeaf4 0%, #fff5fa 100%);
              font-family: 'Arial', sans-serif;
              text-align: center;
              color: #444;
              flex-direction: column;
            }
            h2 {
              color: #e75480;
              font-size: 1.5em;
              margin-bottom: 10px;
            }
            p {
              font-size: 1.1em;
            }
            .heart {
              color: #ff80b3;
              font-size: 1.3em;
            }
          </style>
        </head>
        <body>
          <div>
            <h2>${mensaje}</h2>
            <p>Falta poco, mi amor 💗</p>
          </div>
        </body>
      </html>
    `);
  }
}
