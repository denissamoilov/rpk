"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

interface Payload {
  [key: string]: string | number;
}

const sessionCookieName = "session";
// const requestTokenCookieName = "requestToken";
const sessionCookieExpiration = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
const sessionCookieExpirationHour = new Date(Date.now() + 1000 * 60 * 60);

// TODO: fix this
const secretKey = process.env.JWT_SECRET ?? "kAwQMYyOFTQTQW0bjAv1UoKxGUzDcID6";

const encodedSecret = new TextEncoder().encode(secretKey);

export async function encryptToken(
  payload: Payload,
  expiresIn: string = "1h"
): Promise<string> {
  const token = new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(expiresIn);

  return await token.sign(encodedSecret);
}

export async function decryptToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, encodedSecret);
    return payload;
  } catch (error) {
    console.error("Error decrypting token", error);
  }
}

export async function createSession(uid: string) {
  const token = await encryptToken({ userId: uid }, "30d");
  return token;
}

export async function updateSession(uid: string) {
  const token = await encryptToken({ userId: uid }, "30d");
  setSession({ token, expires: 30 });
}

export async function deleteSession(session: string) {
  try {
    cookies().delete(session);
  } catch (error) {
    console.log("Error deleting session: ", error);
  }
}

export async function setSession({
  token,
  expires,
}: {
  token: string;
  expires: number;
}) {
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(Date.now() + expires),
  };

  cookies().set(sessionCookieName, token, cookieOptions);
}

export async function getSession() {
  const token = cookies().get(sessionCookieName)?.value;
  return token;
}
