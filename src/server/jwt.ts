import * as jose from "jose";

interface Payload {
  [key: string]: string | number;
}

// TODO: fix this
const SECRET_KEY = process.env.JWT_SECRET ?? "kAwQMYyOFTQTQW0bjAv1UoKxGUzDcID6";

export async function generateToken(
  payload: Payload,
  expiresIn: string = "1h"
): Promise<string> {
  const token = new jose.SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(expiresIn);

  const encodedSecret = new TextEncoder().encode(SECRET_KEY);

  return await token.sign(encodedSecret);
}
