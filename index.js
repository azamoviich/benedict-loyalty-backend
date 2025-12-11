const users = {};

export default function handler(req, res) {
  if (req.method === 'POST' && req.url === '/api/me') {
    const { telegramId } = req.body || {};
    return res.status(200).json({ user: users[telegramId] || null });
  }

  if (req.method === 'POST' && req.url === '/api/register') {
    const { telegramId, phone, name, surname } = req.body || {};
    if (!telegramId || !phone || !name) return res.status(400).json({ error: 'Missing data' });

    users[telegramId] = { name, surname: surname || '', phone, points: 1250, tier: 'Gold' };
    return res.status(200).json({ user: users[telegramId] });
  }

  res.status(404).json({ error: 'Not found' });
}