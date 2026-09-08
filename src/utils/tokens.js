import jwt from "jsonwebtoken";
import crypto from "crypto";

export const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  return token;
};

export const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

export const generateRandomTokenCrypto = () => {
  const token = crypto.randomBytes(32).toString("hex");
  return token;
};

export const hashToken = (token) => {
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  return hashedToken;
};
