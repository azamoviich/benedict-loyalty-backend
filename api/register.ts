const users: Record<string, any> = {};

export default function handler(req: any, res: any) {
  const { telegramId, phone, name, surname } = req.body;

  if (!telegramId || !phone || !name) {
    return res.status(400).json({ error: 'Missing data' });
  }

  users[telegramId] = {
    telegramId,
    phone,
    name,
    surname: surname || '',
    points: 1250,
    tier: 'Gold',
    nextTierPoints: 500,
    totalSpent: 2850000,
    level: 'Gold',
    cashback: '2%'
  };

  return res.status(200).json({ user: users[telegramId] });
}