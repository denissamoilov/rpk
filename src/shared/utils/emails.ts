"use client";

export const sendEmail = async ({ token }: { token: string }) => {
  await fetch("/api/emails", {
    method: "POST",
    body: JSON.stringify({ token }),
  });
};
