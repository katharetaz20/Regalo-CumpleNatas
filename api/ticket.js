export default function handler(req, res) {
  const targetDate = new Date('2026-06-24T00:00:00-05:00'); // Fecha en Bogotá
  const now = new Date();

  const IMAGE_URL = 'https://regalo-cumple-natas.vercel.app/Tiquete_regalo.png'; // URL final

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
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              height: 100vh;
              font-family: 'Poppins', sans-serif;
              background: linear-gradient(180deg, #ffe6f0, #fff5fa);
              color: #4a4a4a;
              text-align: center;
            }

            h2 {
              color: #e75480;
              font-size: 1.8em;
              margin-bottom: 0.5em;
            }

            p {
              color: #555;
              font-size: 1.2em;
              margin: 0.5em 0;
            }

            #countdown {
              font-size: 1.4em;
              color: #e75480;
              font-weight: bold;
              margin-top: 1em;
            }

            .heart {
              width: 60px;
              height: 60px;
              position: relative;
              transform: rotate(-45deg);
              animation: beat 1s infinite;
              margin-top: 1.5em;
            }

            .heart::before, .heart::after {
