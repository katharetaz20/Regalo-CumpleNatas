export default function handler(req, res) {
  const targetDate = new Date('2026-06-24T00:00:00-05:00'); // Fecha en Bogotá
  const now = new Date();

  const IMAGE_URL = 'https://regalo-cumple-natas.vercel.app/Tiquete_regalo.png';

  if (now >= targetDate) {
    return res.writeHead(302, { Location: IMAGE_URL }).end();
  } else {
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
              flex-direction: column;
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
            #countdown {
              margin-top: 30px;
              font-size: 1.4em;
              font-weight: bold;
              color: #d63384;
              animation: fadeIn 3s ease forwards;
              animation-delay: 3s;
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
          <div>
            <h2>Tu regalo se revelará el 24 de junio 2026 a partir de la media noche.</h2>
            <p>Te encantará... Ten paciencia... Te Amo <span class="corazon">💗</span></p>
            <div id="countdown"></div>
          </div>
          <script>
            const countdown = document.getElementById('countdown');
            const target = new Date('2026-06-24T00:00:00-05:00').getTime();

            const interval = setInterval(() => {
              const now = new Date().getTime();
              const distance = target - now;

              if (distance <= 0) {
                clearInterval(interval);
                countdown.innerHTML = "🎁 ¡Ya está disponible tu regalo! 💗";
              } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                countdown.innerHTML = \`Faltan <span style="color:#cc007a;">\${days}</span> días, 
                <span style="color:#cc007a;">\${hours}</span> horas, 
                <span style="color:#cc007a;">\${minutes}</span> minutos y 
                <span style="color:#cc007a;">\${seconds}</span> segundos 💞\`;
              }
            }, 1000);
          </script>
        </body>
      </html>
    `);
  }
}
