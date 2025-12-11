const users = {};

export default function handler(req, res) {
  req.body || {};
  if (!telegramId || !phone || !name) return res.status(400).json({ error: 'Missing' });

  users[telegramId] = {
    name, surname, phone,
    points: 1250, tier: 'Gold', nextTierPoints: 500, totalSpent: 28500000
  };

  res.status(200).json({ user: users[telegramId] });
}