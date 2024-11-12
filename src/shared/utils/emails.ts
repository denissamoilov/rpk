"use client";

export const sendEmail = async ({
  token,
  uid,
  email,
}: {
  token: string | null;
  uid: string;
  email: string;
}) => {
  await fetch("/api/emails", {
    method: "POST",
    body: JSON.stringify({ token, uid, email }),
  });
};
