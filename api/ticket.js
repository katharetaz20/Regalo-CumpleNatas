export default async function handler(req, res) {
  const targetDate = new Date('2026-06-24T00:00:00-05:00'); // Fecha en Bogotá
  const now = new Date();
  const IMAGE_URL = 'https://regalo-cumple-natas.vercel.app/Tiquete_regalo.png'; // Tu imagen final

  if (now >= targetDate) {
    return res.writeHead(302, { Location: IMAGE_URL }).end();
  } else {
    const mensaje = '✨ Estará disponible el 24 de junio de 2026, desde la medianoche ✨';
    return res.status(200).send(`
      <!doctype html>
      <html lang="es">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>🎁 Sorpresa para Nata 💕</title>
          <style>
            body {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100vh;
              background: radial-gradient(circle at top left, #ffb6c1, #ffc0cb, #fff0f5);
              color: #4b2b33;
              font-family: 'Poppins', sans-serif;
              text-align: center;
              overflow: hidden;
            }
            h2 {
              font-size: 1.8rem;
              margin-bottom: 10px;
              color: #d6336c;
            }
            #countdown {
              font-size: 1.5rem;
              margin-top: 10px;
              color: #4b2b33;
            }
            .heart {
              font-size: 60px;
              color: #ff3366;
              animation: beat 1s infinite;
              margin-top: 15px;
            }
            @keyframes beat {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.3); }
            }
            .sparkles {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              pointer-events: none;
              background-image: radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px);
              background-size: 30px 30px;
              animation: sparkle 3s linear infinite;
            }
            @keyframes sparkle {
              from { background-position: 0 0; }
              to { background-position: 30px 30px; }
            }
            p {
              margin-top: 8px;
              font-size: 1rem;
              color: #6a1b3f;
            }
          </style>
        </head>
        <body>
          <div class="sparkles"></div>
          <h2>${mensaje}</h2>
          <div id="countdown"></div>
          <div class="heart">💖</div>
          <p>Falta poquito, mi amor 💛</p>

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

