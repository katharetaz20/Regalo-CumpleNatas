export default function handler(req, res) {
  const targetDate = new Date('2026-06-24T00:00:00-05:00'); // Fecha en Bogotá
  const now = new Date();

  const IMAGE_URL = 'https://regalo-cumple-natas.vercel.app/Tiquete_regalo.png'; // Tu imagen real

  if (now >= targetDate) {
    // Redirige a la imagen del regalo
    return res.writeHead(302, { Location: IMAGE_URL }).end();
  } else {
    // Muestra el mensaje y el conteo
    const mensaje = 'Estará disponible únicamente para el 24 de junio de 2026 desde la medianoche';
    return res.status(200).send(`
      <!doctype html>
      <html lang="es">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <title>🎁 Sorpresa para Nata 💛</title>
          <style>
            body {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100vh;
              background: #000;
              color: white;
              font-family: 'Poppins', sans-serif;
              text-align: center;
            }
            h2 {
              font-size: 1.6rem;
              margin-bottom: 10px;
            }
            #countdown {
              font-size: 1.4rem;
              margin-top: 8px;
            }
            .heart {
              color: red;
              font-size: 50px;
              animation: beat 1s infinite;
              margin-top: 15px;
            }
            @keyframes beat {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.3); }
            }
          </style>
        </head>
        <body>
          <h2>${mensaje}</h2>
          <div id="countdown"></div>
          <div class="heart">❤️</div>

          <script>
            const targetDate = new Date('2026-06-24T00:00:00-05:00');
            function updateCountdown() {
              const now = new Date();
              const diff = targetDate - now;
              if (diff <= 0) {
                window.location.href = '${IMAGE_URL}';
                return;
              }
              const days = Math.floor(diff / (1000 * 60 * 60 * 24));
              const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
              const minutes = Math.floor((diff / (1000 * 60)) % 60);
              const seconds = Math.floor((diff / 1000) % 60);
              document.getElementById('countdown').innerText =
                \`\${days}d \${hours}h \${minutes}m \${seconds}s\`;
            }
            setInterval(updateCountdown, 1000);
            updateCountdown();
          </script>
        </body>
      </html>
    `);
  }
}
