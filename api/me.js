const users = {};

export default function handler(req, res) {
  const { telegramId } = req.body || {};
  res.status(200).json({ user: users[telegramId] || null });
}