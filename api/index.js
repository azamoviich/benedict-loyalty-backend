// backend/api/index.js
const users = {};

export default function handler(req, res) {
  const { telegramId, phone, name, surname } from req.body;

  if (req.method === 'POST') {
    users[telegramId] = { telegramId, phone, name, surname: surname || '', points: 1250 };
    return res.status(200).json({ user: users[telegramId] });
  }

  res.status(200).json({ user: users[telegramId] || null });
}