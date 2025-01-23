import { getUserByEmail } from "./controllers/user.js";
import jwt from "jsonwebtoken";

const secret = "qwerytsdklfgmwsdk";

export const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user || user.password !== password) {
    return res.sendStatus(401);
  }

  const data = { sub: user.id, name: user.email, companyId: user.companyId };

  const token = jwt.sign(data, secret);

  res.json({
    token,
  });
};
