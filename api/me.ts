const users: Record<string, any> = {};

export default function handler(req: any, res: any) {
  const { telegramId } = req.body;
  const user = users[telegramId] || null;
  return res.status(200).json({ user });
}