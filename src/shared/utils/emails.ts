"use client";

export const sendEmail = async ({
  token,
  email,
}: {
  token: string;
  email: string;
}) => {
  await fetch("/api/emails", {
    method: "POST",
    body: JSON.stringify({ token, email }),
  });
};
