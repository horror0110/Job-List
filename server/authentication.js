import { getUserByEmail } from "./controllers/user.js";
import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";

const secret = "qwerytsdklfgmwsdk";

export const authenticationMiddleware = expressjwt({
  algorithms: ["HS256"],
  secret,
  credentialsRequired: false,
});

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
