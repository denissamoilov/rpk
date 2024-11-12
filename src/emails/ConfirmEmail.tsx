import { Button, Html } from "@react-email/components";
import * as React from "react";
import { emailButtonStyle } from "./styles/styles";

export default function ConfirmEmail({
  token,
  host,
  locale,
}: {
  token: string | null;
  host: string | null;
  locale: string | null;
}) {
  return (
    <Html>
      <Button
        href={`https://${host}/${locale ?? "en"}/complete?token=${token}`}
        style={emailButtonStyle}
      >
        Confirm email
      </Button>
    </Html>
  );
}
