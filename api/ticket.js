export default function handler(req, res) {
  const targetDate = new Date('2026-06-24T00:00:00-05:00'); // Hora Colombia
  const now = new Date();

  // URL real de la imagen final del regalo
  const IMAGE_URL = 'https://regalo-cumple-natas.vercel.app/Tiquete_regalo.png';

  if (now >= targetDate) {
    // Redirige al regalo una vez llegue la fecha
    return res.writeHead(302, { Location: IMAGE_URL }).end();
  } else {
    // Página antes del día
    const mensaje = `
      <h2>Tu regalo se revelará el 24 de junio 2026 a partir de la media noche.</h2>
      <p>Te encantará... Ten paciencia... Te amo <span class="corazon">💗</span></p>
    `;

    return res.status(200).send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <title>🎁 Sorpresa</title>
          <style>
            body {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              background-color: #ffe6f1;
              font-family: 'Arial', sans-serif;
              text-align: center;
              color: #cc007a;
              padding: 20px;
            }
            h2, p {
              opacity: 0;
              animation: fadeIn 2s ease forwards;
            }
            h2 {
              animation-delay: 0.5s;
            }
            p {
              animation-delay: 2s;
            }
            .corazon {
              display: inline-block;
              animation: latido 1.2s infinite ease-in-out;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes latido {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.3); }
            }
          </style>
        </head>
        <body>
          <div>${mensaje}</div>
        </body>
      </html>
    `);
  }
}
