export default function handler(req, res) {
  const targetDate = new Date('2026-06-24T00:00:00-05:00');
  const now = new Date();
  const IMAGE_URL = 'https://regalo-cumple-natas.vercel.app/Tiquete_regalo.png';

  if (now >= targetDate) {
    res.writeHead(302, { Location: IMAGE_URL });
    res.end();
  } else {
    res.status(200).send(`
      <!doctype html>
      <html lang="es">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>🎁 Sorpresa</title>
          <style>
            body {
              margin: 0;
              height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              background: linear-gradient(180deg, #ffeaf4, #fff5fa);
              font-family: 'Poppins', sans-serif;
              color: #4a4a4a;
              text-align: center;
            }

            h1 {
              font-size: 1.8em;
              color: #e75480;
              margin-bottom: 0.4em;
            }

            p {
              font-size: 1.1em;
              margin: 0.4em 0;
              color: #555;
            }

            #countdown {
              font-size: 1.4em;
              color: #e75480;
              font-weight: bold;
              margin: 0.8em 0;
            }

            .heart {
              width: 50px;
              height: 50px;
              position: relative;
              transform: rotate(-45deg);
              animation: beat 1s infinite;
              margin-top: 1em;
            }

            .heart::before,
            .heart::after {
              content: "";
              width: 50px;
              height: 50px;
              background: #e75480;
              border-radius: 50%;
              position: absolute;
            }

            .heart::before {
              top: -25px;
              left: 0;
            }

            .heart::after {
              left: 25px;
              top: 0;
            }

            @keyframes beat {
              0%, 100% { transform: scale(1) rotate(-45deg); }
              50% { transform: scale(1.2) rotate(-45deg); }
            }

            footer {
              position: absolute;
              bottom: 20px;
              font-size: 0.9em;
              color: #888;
            }
          </style>
        </head>

        <body>
          <h1>Tu regalo se revelará el 24 de junio de 2026 💝</h1>
          <p>Te encantará... Ten paciencia...</p>
          <div id="countdown">Calculando...</div>
          <div class="heart"></div>
          <footer>Te amo 💗</footer>

          <script>
            const targetDate = new Date('2026-06-24T00:00:00-05:00').getTime();
            const countdownEl = document.getElementById('countdown');

            function updateCountdown() {
              const now = new Date().getTime();
              const distance = targetDate - now;

              if (distance <= 0) {
                countdownEl.innerHTML = "¡Ya puedes abrir tu regalo! 🎁";
                return;
              }

              const days = Math.floor(distance / (1000 * 60 * 60 * 24));
              const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((distance % (1000 * 60)) / 1000);

              countdownEl.innerHTML = 
                days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
            }

            setInterval(updateCountdown, 1000);
          </script>
        </body>
      </html>
    `);
  }
}
