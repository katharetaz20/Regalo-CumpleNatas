export default function handler(req, res) {
  return res.writeHead(302, { Location: '/api/ticket' }).end();
}
